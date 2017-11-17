require 'digest/md5'

class FightController < ApplicationController
  before_action :authenticate_user!

  def initiate
    key = helpers.get_key_signature(current_user.name, params[:recepient])
    data = Rails.cache.fetch(key.to_s, expires_in: 30.seconds) do
      { initiator: current_user.name, recepient: params[:recepient] }.to_json
    end
    helpers.broadcast("/#{params[:recepient]}", fight_request: data)
  end

  def confirm_invite
    key = helpers.get_key_signature(params[:initiator], current_user.name)

    if params[:accepted].nil? || params[:accepted] == "false"
      Rails.cache.delete(key.to_s)
    else
      key_params = [DateTime.now, params[:initiator], current_user.name]
      hash = Digest::MD5.hexdigest(key_params.join)

      helpers.save_fight_cache(hash)

      helpers.broadcast("/#{params[:initiator]}", fight_redirect: { url: fight_path(hash) }.to_json)
      helpers.broadcast("/#{current_user.name}", fight_redirect: { url: fight_path(hash) }.to_json)
    end
  end

  def index
    @cache = Rails.cache.read(params[:id])
    return redirect_to '/fight/users' if @cache.nil?

    session[:fight] = params[:id]

    helpers.mark_user_as_visited(params[:id], @cache)

    set_user_vars

    initiator = helpers.get_fight_initiator(@cache[:initiator], @enemy)
    helpers.change_status(@status, params[:id], initiator, @enemy) if @status == 'ready'
  end

  def update
    fight = Fight.where(fight_hash: session[:fight], winner: nil).first

    return if fight.nil? || repeated_request(fight)

    if helpers.opponent_is_ready?(fight)
      FightService.new(fight, current_user, session[:fight])
                  .calculate_damage(params[:fight])
    else
      fight.fight_logs.create!({ damage: 0, attack: params[:fight][:attack], block: params[:fight][:block],
                                 item_id: params[:fight][:item], user_id: current_user.id })
    end
  end

  def users
    @users = User.all
  end

  private

  def set_user_vars
    return if @cache.nil?

    index = @cache[:users].index(current_user.name).zero? ? 1 : 0
    @enemy = User.find_by_name @cache[:users][index]
    @equipment = current_user.items.equipment
    @useable = current_user.usable_items_with_count
    @status = @cache[:visited][@enemy.name] == true ? 'ready' : 'waiting'
  end

  def repeated_request(fight)
    log = fight.fight_logs.last

    return false if log.nil?

    log.damage.zero? && log.user_id == current_user.id
  end
end

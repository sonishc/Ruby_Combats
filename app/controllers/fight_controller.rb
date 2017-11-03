require 'digest/md5'

class FightController < ApplicationController
  before_action :authenticate_user!

  def initiate
    key = get_key_signature(current_user.name, params[:recepient])
    data = Rails.cache.fetch(key.to_s, expires_in: 30.seconds) do
      { initiator: current_user.name, recepient: params[:recepient] }.to_json
    end
    broadcast("/#{params[:recepient]}", fight_request: data)
  end

  def confirm_invite
    key = get_key_signature(params[:initiator], current_user.name)

    if params[:accepted].nil? || params[:accepted] == "false"
      Rails.cache.delete(key.to_s)
    else
      key_params = [DateTime.now, params[:initiator], current_user.name]
      hash = Digest::MD5.hexdigest(key_params.join)

      Rails.cache.write(hash, {
                                visited: { current_user.name => false, params[:initiator] => false},
                                initiator: params[:initiator],
                                users: [current_user.name, params[:initiator]]
                              },
                              expires_in: 30.seconds)

      broadcast("/#{params[:initiator]}", fight_redirect: { url: fight_path(hash) }.to_json)
      broadcast("/#{current_user.name}", fight_redirect: { url: fight_path(hash) }.to_json)
    end
  end

  def index
    cache = Rails.cache.read(params[:id])
    return redirect_to '/fight/users' if cache.nil?

    session[:fight] = params[:id]
    cache[:visited][current_user.name] = true

    Rails.cache.write(params[:id], cache, expires_in: 30.seconds)

    index = cache[:users].index(current_user.name).zero? ? 1 : 0
    @enemy = User.find_by_name cache[:users][index]
    @equipment = current_user.items.equipment
    @useable = current_user.usable_items_with_count
    @status = cache[:visited][@enemy.name] == true ? 'ready' : 'waiting'

    initiator = get_fight_initiator(cache[:initiator], @enemy)
    change_status(@status, params[:id], initiator, @enemy) if @status == 'ready'
  end

  def update
    fight = Fight.where(fight_hash: session[:fight], winner: nil).first

    return if fight.nil? || repeated_request(fight)

    if opponent_is_ready?(fight)
      calculate_damage(fight, params[:fight])
    else
      fight.fight_logs.create!({ damage: 0, attack: params[:fight][:attack], block: params[:fight][:block],
                                 item_id: params[:fight][:item], user_id: current_user.id })
    end
  end

  def users
    @users = User.all
  end

  private

  def get_key_signature(initiator, oponent)
    "fight-stage1-#{initiator}-#{oponent}"
  end

  def get_fight_initiator(initiator, opponent)
    initiator == current_user.name ? current_user : opponent
  end

  def opponent_is_ready?(fight)
    fight.fight_logs.last && fight.fight_logs.last.damage == 0
  end

  def calculate_damage(fight, current_attack)
    previous_attack = fight.fight_logs.last
    current_attack = fight.fight_logs.create({ damage: 0, attack: current_attack[:attack], block: current_attack[:block],
                              item_id: current_attack[:item], user_id: current_user.id})

    if current_user.id != fight.initiator.id
      current_attack, previous_attack = previous_attack, current_attack
    end

    broadcast("/#{session[:fight]}", { type: 'play_animation', first: current_attack.user.name }.to_json)

    update_damage(current_attack)

    opponent_hp = get_health(previous_attack)

    if opponent_hp <= 0
      finish_fight(fight, current_attack.user)
    else
      update_damage(previous_attack)

      initiator_hp = get_health(current_attack)

      if initiator_hp <= 0
        finish_fight(fight, previous_attack.user)
      else
        broadcast("/#{session[:fight]}/update", { previous_attack.user.name => opponent_hp, current_attack.user.name => initiator_hp }.to_json)
      end
    end

  end

  def update_damage(log)
    if log.item != nil
      case log.item.effect_type
      when 1
        value = log.item.effect_value
        log.update_attribute('damage', value)
      when 2
        value = log.item.effect_value
        log.update_attribute('damage', value + rand(30..45))
      end
    else
      log.update_attribute('damage', rand(30..45))
    end
  end

  def change_status(status, channel, initiator, enemy)
    attributes = { opponent: current_user, initiator: enemy, fight_hash: session[:fight] }

    if initiator == current_user
      attributes[:opponent], attributes[:initiator] = attributes[:initiator], attributes[:opponent]
    end

    Fight.create(attributes)
    broadcast("/#{channel}", { status_update: status, type: 'status_update' }.to_json)
  end

  def get_health(log)
    hp = log.user.hp + log.fight.fight_logs.get_healing(log.user_id)
    hp - log.fight.fight_logs.get_damage(log.user_id)
  end

  def repeated_request(fight)
    log = fight.fight_logs.last

    return false if log.nil?

    log.damage.zero? && log.user_id == current_user.id
  end

  def finish_fight(fight, winner)
    broadcast("/#{session[:fight]}", { type: 'fight_finished', winner: winner.name }.to_json)
    fight.update_attribute('winner', winner.id)
  end
end

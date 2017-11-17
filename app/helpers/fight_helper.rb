module FightHelper
  def mark_user_as_visited(id, cache)
    cache[:visited][current_user.name] = true

    Rails.cache.write(id, cache, expires_in: 30.seconds)
  end

  def get_key_signature(initiator, oponent)
    "fight-stage1-#{initiator}-#{oponent}"
  end

  def change_status(status, channel, initiator, enemy)
    attributes = { opponent: current_user, initiator: enemy, fight_hash: session[:fight] }

    if initiator == current_user
      attributes[:opponent], attributes[:initiator] = attributes[:initiator], attributes[:opponent]
    end

    Fight.create(attributes)
    broadcast("/#{channel}", { status_update: status, type: 'status_update' }.to_json)
  end

  def get_fight_initiator(initiator, opponent)
    initiator == current_user.name ? current_user : opponent
  end

  def save_fight_cache(key)
    Rails.cache.write(key, {
                              visited: { current_user.name => false, params[:initiator] => false},
                              initiator: params[:initiator],
                              users: [current_user.name, params[:initiator]]
                            },
                            expires_in: 30.seconds)
  end

  def opponent_is_ready?(fight)
    fight.fight_logs.last && fight.fight_logs.last.damage == 0
  end

  def broadcast(channel, msg)
    message = { channel: channel, data: msg }
    uri = URI.parse('http://localhost:9292/faye')
    Net::HTTP.post_form(uri, message: message.to_json)
  end
end

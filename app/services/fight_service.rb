class FightService
  def initialize(fight, current_user, fight_hash)
    @fight = fight
    @current_user = current_user
    @fight_hash = fight_hash
  end

  def calculate_damage(current_attack)
    @previous_attack = @fight.fight_logs.last
    @current_attack = @fight.fight_logs.create({ damage: 0, attack: current_attack[:attack], block: current_attack[:block],
                              item_id: current_attack[:item], user_id: @current_user.id})

    check_for_initiator(@fight.initiator.id)

    broadcast("/#{@fight_hash}", { type: 'play_animation', first: @current_attack.user.name }.to_json)

    update_damage(@current_attack)

    opponent_hp = get_health(@previous_attack)

    if opponent_hp <= 0
      finish_fight(@fight, @current_attack.user)
    else
      update_damage(@previous_attack)

      initiator_hp = get_health(@current_attack)

      if initiator_hp <= 0
        finish_fight(@fight, @previous_attack.user)
      else
        update_fight_stats(opponent_hp, initiator_hp)
      end
    end
  end

  def check_for_initiator(id)
    if @current_user.id != id
      @current_attack, @previous_attack = @previous_attack, @current_attack
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

  def get_health(log)
    hp = log.user.hp + log.fight.fight_logs.get_healing(log.user_id)
    hp - log.fight.fight_logs.get_damage(log.user_id)
  end

  def finish_fight(fight, winner)
    broadcast("/#{@fight_hash}", { type: 'fight_finished', winner: winner.name }.to_json)
    fight.update_attribute('winner', winner.id)
  end

  def update_fight_stats(opponent_hp, initiator_hp)
    broadcast("/#{@fight_hash}/update", { @previous_attack.user.name => opponent_hp, @current_attack.user.name => initiator_hp }.to_json)
  end

  def broadcast(channel, msg)
    message = { channel: channel, data: msg }
    uri = URI.parse('http://localhost:9292/faye')
    Net::HTTP.post_form(uri, message: message.to_json)
  end
end

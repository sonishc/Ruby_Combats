class FightLog < ApplicationRecord
  belongs_to :user
  belongs_to :item, optional: true
  belongs_to :fight

  def self.get_damage(id)
    where(user_id: id).where('"item_id" NOT IN (?) OR "item_id" IS NULL', Item.where(effect_type: 1)
                      .select('id')).sum(:damage)
  end

  def self.get_healing(id)
    where(user_id: id, item_id: Item.where(effect_type: 1)).sum(:damage)
  end
end

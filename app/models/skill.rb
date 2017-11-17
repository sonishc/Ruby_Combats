class Skill < ApplicationRecord
  belongs_to :user
  validates :power, :dexterity, :instinct, :stamina,
            numericality: { only_integer: true }
end

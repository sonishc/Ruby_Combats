class Skill < ApplicationRecord
  belongs_to :user
  validates_presence_of :power, :dexterity, :instinct, :stamina, :experience
  validates :power, :dexterity, :instinct, numericality: { only_integer: true }
  validates :stamina, :experience, numericality: { only_integer: true }
  validates_inclusion_of :power, :dexterity, :instinct, :stamina, in: 1..1_000
  validates_inclusion_of :experience, in: 50..10_000
end

# Level
class Level < ApplicationRecord
  # has_many :users | need when connecting with the User model
  # Explain -> ( level.id is a user_level )

  validates_presence_of :level_experience, :level_health_point
  validates :level_experience, :level_health_point,
            numericality: { only_integer: true },
            uniqueness: true
  validates :level_experience, :level_health_point, length: { maximum: 5 }
  max_level = 12
  validates_inclusion_of :id, in: 1..max_level
  validates_inclusion_of :level_experience, in: 50..10_000
  validates_inclusion_of :level_health_point, in: 100..10_000

  # validates_associated :users | need when connecting with the User model
end

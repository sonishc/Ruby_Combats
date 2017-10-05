class Level < ApplicationRecord
  has_many :users
  validates_presence_of :experience_level, :health_point_level
  validates :experience_level, :health_point_level,
            numericality: { only_integer: true },
            uniqueness: true
  validates :experience_level, :health_point_level, length: { maximum: 5 }
  MAX_LEVEL = 12
  validates_inclusion_of :id, in: 1..MAX_LEVEL
  validates_inclusion_of :experience_level, in: 50..10_000
  validates_inclusion_of :health_point_level, in: 100..10_000

  validates_associated :users
end

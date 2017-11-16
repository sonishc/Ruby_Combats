# Item class
class Item < ApplicationRecord
  has_many :inventories
  attr_accessor :count

  scope :useable, -> { where(category: 'useable') }

  def self.equipment
    where(inventories: { equipped: true }, category: 'equipment')
  end
end

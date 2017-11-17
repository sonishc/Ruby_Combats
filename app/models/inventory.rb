# creating Inventory model for all User's stuff
class Inventory < ApplicationRecord
  belongs_to :user
  belongs_to :item
  validates_uniqueness_of :item_id, scope: :user_id
  validate :maximum_items_not_more_then_15, on: :create

  private

  def maximum_items_not_more_then_15
    errors.add(:base, 'Your backpack is full!') if user.items.count > 15
  end
end

class Role < ApplicationRecord
  has_many :users
  validates :title, length: { in: 2..20 }
  accepts_nested_attributes_for :users
end

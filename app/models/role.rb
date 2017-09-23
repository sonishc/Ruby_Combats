class Role < ApplicationRecord
  has_many :users
  validates :title, length: { in: 2..20 }
end

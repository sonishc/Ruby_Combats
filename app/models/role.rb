class Role < ApplicationRecord
  validates :title, length: { in: 2..20 }
end

class Fight < ApplicationRecord
  belongs_to :initiator, foreign_key: 'initiator', class_name: 'User'
  belongs_to :opponent, foreign_key: 'opponent', class_name: 'User'
  has_many :fight_logs
end

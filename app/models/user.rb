class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  belongs_to :role
  has_many :inventories
  has_one :image, class_name: 'Image', as: :attachable
  accepts_nested_attributes_for :image

  validates :name, presence: true, uniqueness: true, length: { maximum: 99 }
end

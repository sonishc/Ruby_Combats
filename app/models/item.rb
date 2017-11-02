# Item class
class Item < ApplicationRecord
  has_many :inventories
  has_one :image, class_name: 'Image', as: :attachable
  accepts_nested_attributes_for :image
end

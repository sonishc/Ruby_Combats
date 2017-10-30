class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  belongs_to :role, optional: true
  belongs_to :level, optional: true
  has_many :inventories
  has_many :items, through: :inventories
  has_one :skill
  has_one :image, class_name: 'Image', as: :attachable
  accepts_nested_attributes_for :image

  before_create :set_default_role
=======
  before_validation :set_default_role
>>>>>>> Implemented effects functionality for items
  after_create :set_items
  after_find :calculate_stats

  attr_accessor :armor, :stamina

  validates :name, presence: true, uniqueness: true, length: { maximum: 99 }

  DEFAULT_ARMOR = [1, 2, 3, 4, 5, 6, 7, 8].freeze

  def handle_bot_hp(user)
    self.hp = rand(user.hp * 0.8..user.hp + user.hp * 0.2)
  end

  def level_up
    exp = [50, 350, 666, 1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 10_000]
    health = [100, 600, 1000, 2000, 3000, 4000,
              5000, 6000, 7000, 8000, 9000, 10_000]
    12.times do |i|
      if experience >= exp[i]
        update_attribute(:level_id, i.next) &&
          update_attribute(:hp, health[i])
      end
    end
  end

  private

  def set_default_role
    self.role_id ||= Role.find_by(title: 'Player').id
  end

  def equip_items
    inventories.where(item_id: DEFAULT_ARMOR).update_all(equipped: true)
  end

  def set_items
    equipment = Item.where(id: DEFAULT_ARMOR)

    return if equipment.count.zero?

    equipment.each do |item|
      items << item
    end
    equip_items
  end

  def calculate_stats
    self.stamina = 0
    self.armor = 0

    items.each do |item|
      self.stamina += item.stamina
      self.armor += item.armor
    end
  end

  def set_default_role
    self.role_id ||= Role.find_by(title: 'Player').id
  end

  def set_items
    Item.all.each do |item|
      items << item
    end
  end

  def calculate_stats
    self.stamina = 0
    self.armor = 0

    items.each do |item|
      self.stamina += item.stamina
      self.armor += item.armor
    end
  end
end

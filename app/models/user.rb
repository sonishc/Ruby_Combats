class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  belongs_to :role
  has_many :inventories
  has_many :items, through: :inventories
  has_one :skill

  before_save :convert_email_to_downcase
  before_validation :set_default_role
  after_create :set_items
  after_find :calculate_stats

  attr_accessor :armor, :stamina

  validates :name, presence: true, uniqueness: true, length: { maximum: 99 }

  DEFAULT_ARMOR = [1, 2, 3, 4, 5, 6, 7, 8].freeze

  def handle_bot_hp(user)
    self.hp = rand(user.hp * 0.8..user.hp + user.hp * 0.2)
  end

  private

  def convert_email_to_downcase
    self.email = email.downcase
  end

  def set_default_role
    self.role_id ||= Role.find_by(title: 'Player').id
  end

  def equip_items
    inventories.where(item_id: DEFAULT_ARMOR).update_all(equipped: true)
  end

  def set_items
    DEFAULT_ARMOR.each do |item|
      items << Item.find(item)
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
end

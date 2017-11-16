class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  belongs_to :role
  has_many :inventories
  has_many :items, through: :inventories
  has_one :skill

  before_save :convert_email_to_downcase
  after_create :set_items
  after_find :calculate_stats

  attr_accessor :armor, :stamina

  validates :name, presence: true, uniqueness: true, length: { maximum: 99 }

  def handle_bot_hp(user)
    self.hp = rand(user.hp * 0.8..user.hp + user.hp * 0.2)
  end

  private

  def set_default_role
    self.role_id ||= Role.find_by(title: 'Player').id
  end

  def set_items
    items << Item.all
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

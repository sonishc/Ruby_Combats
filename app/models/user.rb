class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :role
  has_many :inventories
  has_one :skill

  before_save :convert_email_to_downcase
  before_create :set_default_role
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    length: { maximum: 50 }, format: { with: VALID_EMAIL_REGEX }
  validates :name, presence: true,  uniqueness: true, length: { maximum: 99 }

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
end

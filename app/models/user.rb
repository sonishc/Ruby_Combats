class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  belongs_to :role, optional: true
  has_many :inventories

  # has_secure_password

  after_initialize :set_default_role, if: :new_record?
  before_save :convert_email_to_downcase

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    length: { maximum: 50 }, format: { with: VALID_EMAIL_REGEX }
  validates :name, presence: true,  uniqueness: true, length: { maximum: 99 }
  validates :password, length: { minimum: 5 }

  private

  def convert_email_to_downcase
    self.email = email.downcase
  end

  def set_default_role
    self.role_id ||= 4
  end
end

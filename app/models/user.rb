# Gem 'bcrypt-ruby'
# Generate User model with password_digest field
class User < ApplicationRecord
  # belongs_to :role
  # belongs_to :level
  has_and_belongs_to_many :inventory
  has_and_belongs_to_many :skills

  has_secure_password

  before_save :downcase_email
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    length: { maximum: 50 }, format: { with: VALID_EMAIL_REGEX }
  validates :name, presence: true,  uniqueness: true
  validates :password, length: { minimum: 5 }

  private

  # Converts email to all lower-case.
  def downcase_email
    self.email = email.downcase
  end
end

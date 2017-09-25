require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user_1) { FactoryGirl.create(:user) }

  it 'is valid with a name, email, and password' do
    expect(user_1).to be_valid
  end

  it 'is invalid without a name' do
    user_1.name = nil
    expect(user_1.valid?).to be(false)
    expect(user_1.errors[:name]).to include("can't be blank")
  end

  it 'is invalid without an email address' do
    user_1.email = nil
    expect(user_1.valid?).to be(false)
    expect(user_1.errors[:email]).to include("can't be blank")
  end

  it 'is invalid with a duplicate email address' do
    user_1.save
    user = User.new(email: 'some@mail.com')
    expect(user.valid?).to be(false)
    expect(user.errors[:email]).to include('has already been taken')
  end

  it 'is invalid with a duplicate name' do
    user_1.save
    user = User.new(name: 'Bob')
    expect(user.valid?).to be(false)
    expect(user.errors[:name]).to include('has already been taken')
  end

  it 'is invalid when email format is invalid' do
    addresses = %w[us@foo,com us_at.org ex.user@foo. fo@ba_ba.com foo@ba+ba.com]
    addresses.each do |invalid_address|
      user_1.email = invalid_address
      expect(user_1).not_to be_valid
    end
  end

  it 'is valid when email format is valid' do
    addresses = %w[user@foo.COM A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn]
    addresses.each do |valid_address|
      user_1.email = valid_address
      expect(user_1).to be_valid
    end
  end

  describe 'when password is not present' do
    before do
      user_1.password = ' '
      user_1.password_confirmation = ' '
    end

    it 'is invalid' do
      expect(user_1).to be_invalid
    end
  end
end

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:role) { FactoryGirl.create(:role) }
  let(:level) { FactoryGirl.create(:level) }
  let(:user_1) do
    FactoryGirl.create(:user, role_id: role.id, level_id: level.id)
  end
  let(:user_2) do
    FactoryGirl.create(:user, role_id: role.id, level_id: level.id)
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
    user_2.email = user_1.email
    expect(user_2.valid?).to be(false)
    expect(user_2.errors[:email]).to include('has already been taken')
  end

  it 'is invalid with a duplicate name' do
    user_2.name = user_1.name
    expect(user_2.valid?).to be(false)
    expect(user_2.errors[:name]).to include('has already been taken')
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

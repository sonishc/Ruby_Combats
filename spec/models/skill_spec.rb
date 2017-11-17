require 'rails_helper'

RSpec.describe Skill, type: :model do
  let(:role) { FactoryGirl.create(:role) }
  let(:user) { FactoryGirl.create(:user, role_id: role.id) }
  let(:skill) { FactoryGirl.create(:skill, user_id: user.id) }

  it 'invalid if power value is string' do
    skill.power = 'some string'
    expect(skill.valid?).to be(false)
    expect(skill.errors[:power]).to include('is not a number')
  end

  it 'valid if power value is integer' do
    skill.power = 5
    expect(skill.valid?).to be(true)
  end

  it 'invalid if dexterity value is string' do
    skill.dexterity = 'some string'
    expect(skill.valid?).to be(false)
    expect(skill.errors[:dexterity]).to include('is not a number')
  end

  it 'valid if dexterity value is integer' do
    skill.dexterity = 5
    expect(skill.valid?).to be(true)
  end

  it 'invalid if instinct value is string' do
    skill.instinct = 'some string'
    expect(skill.valid?).to be(false)
    expect(skill.errors[:instinct]).to include('is not a number')
  end

  it 'valid if instinct value is integer' do
    skill.instinct = 5
    expect(skill.valid?).to be(true)
  end

  it 'invalid if stamina value is string' do
    skill.stamina = 'some string'
    expect(skill.valid?).to be(false)
    expect(skill.errors[:stamina]).to include('is not a number')
  end

  it 'valid if stamina value is integer' do
    skill.stamina = 5
    expect(skill.valid?).to be(true)
  end
end

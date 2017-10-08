require 'rails_helper'

RSpec.describe Skill, type: :model do
  let(:role) { FactoryGirl.create(:role) }
  let(:user) { FactoryGirl.create(:user, role_id: role.id) }
  let(:skill) { FactoryGirl.create(:skill, user_id: user.id) }

  it 'invalid if user.id value is not equal to skill.id' do
    is_expected.not_to be_valid if skill.id != user.id
  end

  it 'invalid if experience value is not an integer in range' do
    (50..10_000).each do |val|
      is_expected.not_to be_valid if skill.experience != val
    end
  end

  it 'invalid if power value is not an integer in range' do
    (1..1_000).each do |val|
      is_expected.not_to be_valid if skill.power != val
    end
  end

  it 'invalid if dexterity value is not an integer in range' do
    (1..1_000).each do |val|
      is_expected.not_to be_valid if skill.dexterity != val
    end
  end

  it 'invalid if instinct value is not an integer in range' do
    (1..1_000).each do |val|
      is_expected.not_to be_valid if skill.instinct != val
    end
  end

  it 'invalid if stamina value is not an integer in range' do
    (1..1_000).each do |val|
      is_expected.not_to be_valid if skill.stamina != val
    end
  end
end

require 'rails_helper'

RSpec.describe Skill, type: :model do
  let(:user) {FactoryGirl.create(:user)}
  let(:skill) {FactoryGirl.create(:skill, user_id: user.id)} 

  it "valid if user.id value is equal to skill.id" do
    is_expected.to allow_value(user.id).for(skill.id) if skill.id == user.id
  end

  it "invalid if user.id value is not equal to skill.id" do
    is_expected.to_not be_valid if skill.id != user.id
  end

  it "invalid if experience value is not an integer in range" do
    (50..10000).each do |value|
      is_expected.to_not be_valid if skill.experience != value
    end
  end

  it "invalid if power value is not an integer in range" do
    (1..1000).each do |value|
      is_expected.to_not be_valid if skill.power != value
    end
  end

  it "invalid if dexterity value is not an integer in range" do
    (1..1000).each do |value|
      is_expected.to_not be_valid if skill.dexterity != value
    end
  end

  it "invalid if instinct value is not an integer in range" do
    (1..1000).each do |value|
      is_expected.to_not be_valid if skill.instinct != value
    end
  end

  it "invalid if stamina value is not an integer in range" do
    (1..1000).each do |value|
      is_expected.to_not be_valid if skill.stamina != value
    end
  end
end
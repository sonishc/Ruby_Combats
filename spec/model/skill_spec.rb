require 'rails_helper'

RSpec.describe Skill, type: :model do
  let(:user) {FactoryGirl.create(:user)}
  let(:skill) {FactoryGirl.create(:skill, user_id: user.id)} 


  describe "Associations" do
    it { should belong_to(:user) }
  end

  it "valid if user.id value is equal to skill.id" do
    if skill.id == user.id
      should allow_value(user.id).for(:skill_id)
    end
  end

  it "invalid if user.id value is not equal to skill.id" do
    if skill.id != user.id
      should_not be_valid
    end
  end

  it "valid if experience value is an integer in range" do
    (50..10000).each do |value|
      if skill.experience == value
        should allow_value(value).for(:experience)
      end
    end
  end

  it "invalid if experience value is not an integer in range" do
    (50..10000).each do |value|
      if skill.experience != value
        should_not be_valid
      end
    end
  end


  it "valid if power value is an integer in range" do
    (1..1000).each do |value|
      if skill.power == value
        should allow_value(value).for(:power)
      end
    end
  end

  it "invalid if power value is not an integer in range" do
    (1..1000).each do |value|
      if skill.power != value
        should_not be_valid
      end
    end
  end

  it "valid if dexterity value is an integer in range" do
    (1..1000).each do |value|
      if skill.dexterity == value
        should allow_value(value).for(:dexterity)
      end
    end
  end

  it "invalid if dexterity value is not an integer in range" do
    (1..1000).each do |value|
      if skill.dexterity != value
        should_not be_valid
      end
    end
  end

  it "valid if instinct value is not integer in range" do
    (1..1000).each do |value|
      if skill.instinct == value
        should allow_value(value).for(:instinct)
      end
    end
  end

  it "invalid if instinct value is not an integer in range" do
    (1..1000).each do |value|
      if skill.instinct != value
         should_not be_valid
      end
    end
  end

  it "valid if stamina value is an integer in range" do
    (1..1000).each do |value|
      if skill.stamina == value
        should allow_value(value).for(:stamina)
      end
    end
  end

  it "invalid if stamina value is not an integer in range" do
    (1..1000).each do |value|
      if skill.stamina != value
        should_not be_valid
      end
    end
  end
end

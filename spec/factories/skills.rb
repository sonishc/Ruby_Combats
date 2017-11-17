FactoryGirl.define do
  factory :skill do
    sequence(:power, 1) { |n| 1 + n }
    sequence(:dexterity, 1) { |n| 1 + n }
    sequence(:instinct, 1) { |n| 1 + n }
    sequence(:stamina, 1) { |n| 1 + n }
  end
end

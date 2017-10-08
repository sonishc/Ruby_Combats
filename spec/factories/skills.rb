FactoryGirl.define do
  factory :skill do
    sequence(:id, 0) { |n| 1 + n }
    experience 50
    power 1
    dexterity 1
    instinct 1
    stamina 1
  end
end

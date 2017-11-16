FactoryGirl.define do
  factory :role do
    sequence(:title) { |n| "role#{n}" }
  end
end

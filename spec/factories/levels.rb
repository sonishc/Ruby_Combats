FactoryGirl.define do
  factory :level do
    sequence(:id) { |n| 1 + n }
    sequence(:level_experience) { |n| 50 + n }
    sequence(:level_health_point) { |n| 100 + n }
  end
end

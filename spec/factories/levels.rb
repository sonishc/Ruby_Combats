FactoryGirl.define do
  factory :level do
    sequence(:id) { |n| 1 + n }
    sequence(:experience_level) { |n| 50 + n }
    sequence(:health_point_level) { |n| 100 + n }
  end
end

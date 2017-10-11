FactoryGirl.define do
  factory :level do
    sequence(:level, (0..11).cycle) { |n| 1 + n }
    sequence(:experience_level, (49..9999).cycle) { |n| 1 + n }
    sequence(:health_point_level, (99..9999).cycle) { |n| 1 + n }
  end
end

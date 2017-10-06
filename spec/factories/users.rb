FactoryGirl.define do
  factory :role do
    sequence(:title) { |n| "User#{n}" }
  end

  factory :user do
    sequence(:name) { |n| "User#{n}" }
    sequence(:email) { |n| "user#{n}@test.com" }
    sequence(:password) { |n| "123456#{n}" }
    role
  end
end

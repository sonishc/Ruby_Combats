FactoryGirl.define do
  factory :user do
    name 'Bob'
    email 'some@mail.com'
    password { Faker::Internet.password }
  end
end

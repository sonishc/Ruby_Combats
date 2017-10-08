FactoryGirl.define do
  factory :skill do
  	# association :user
  	sequence(:id, 0) {|n| 1+n}
  	experience 50
  	power 1
  	dexterity 1
  	instinct 1
  	stamina 1
  end

  
# # FactoryGirl.define do
#   factory :user do
#     sequence(:name) { |n| "User#{n}" }
#     sequence(:email) { |n| "user#{n}@test.com" }
#     sequence(:password) { |n| "123456#{n}" }
#   end
# # end
end

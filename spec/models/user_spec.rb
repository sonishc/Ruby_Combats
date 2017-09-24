require 'rails_helper'

RSpec.describe User, type: :model do
	before do
    @user = User.new(
      name: 	  "Joe",
      email: 	  "tester@example.com",
      password: "some_pass",
      password_confirmation: "some_pass"
     )
  end

	it "is valid with a name, email, and password" do
		user = User.new(
      name: 	  "Joe",
      email: 	  "tester@example.com",
      password: "some_pass",
     )
     expect(user).to be_valid
	end

  it "is invalid without a name" do
  	user = User.new(name: nil)
	  user.valid?
	  expect(user.errors[:name]).to include("can't be blank")
  end

  it "is invalid without an email address" do
  	user = User.new(email: nil)
	  user.valid?
	  expect(user.errors[:email]).to include("can't be blank")
  end

  it "is invalid with a duplicate email address" do
		User.create(
    	name: 	  "Bob",
    	email: 	  "tester@example.com",
    	password: "my_pass",
    	password_confirmation: "my_pass"
    )
		user = User.new(
    	name: 	  "Joe",
    	email: 	  "tester@example.com",
    	password: "some_pass",
    	password_confirmation: "some_pass"
    )
    user.valid?
    expect(user.errors[:email]).to include("has already been taken")
	end

	it "is invalid with a duplicate name" do
		User.create(
    	name: 	  "Bob",
    	email: 	  "test@example.com",
    	password: "my_pass",
    	password_confirmation: "my_pass"
    )
		user = User.new(
    	name: 	  "Bob",
    	email: 	  "tester@example.com",
    	password: "some_pass",
    	password_confirmation: "some_pass"
    )
    user.valid?
    expect(user.errors[:name]).to include("has already been taken")
	end

	describe "when email format is invalid" do
    it "should be invalid" do
      addresses = %w[user@foo,com user_at_foo.org example.user@foo.
                     foo@bar_baz.com foo@bar+baz.com]
      addresses.each do |invalid_address|
        @user.email = invalid_address
        expect(@user).not_to be_valid
      end
    end
  end

  describe "when email format is valid" do
    it "should be valid" do
      addresses = %w[user@foo.COM A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn]
      addresses.each do |valid_address|
        @user.email = valid_address
        expect(@user).to be_valid
      end
    end
  end

  describe "when password is not present" do
	  before { @user.password = @user.password_confirmation = " " }
	  it "should be invalid" do
	  	expect(@user).to be_invalid
	  end
	end
end

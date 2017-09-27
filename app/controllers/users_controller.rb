# User controller
class UsersController < ApplicationController
  def new; end

  def create
    # byebug
    @user = User.new(user_params)

    if @user.save
      flash[:success] = 'Welcome to the Combats!'
    else
      render 'new'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password_digest)
  end
end

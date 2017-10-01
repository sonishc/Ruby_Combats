class UsersController < ApplicationController
  def fight
    @user = User.find(1) # Need for current_user = User.find(session[:user_id])
    @bot = @user.dup
    @bot.hp = rand(@user.hp * 0.8..@user.hp + @user.hp * 0.2)
  end

  def update
    @user = User.update_attribute(:experience, 52)
    if @user.save
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:experience)
  end
end

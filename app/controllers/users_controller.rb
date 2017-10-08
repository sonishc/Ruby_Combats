class UsersController < ApplicationController
  before_action :authenticate_user!, only: %i[fight add_experience]

  def fight
    @user = current_user
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

  def add_experience
    current_user.increment(:experience, params[:experience])

    if current_user.save
      render json: { status: 'OK' }.to_json
    else
      render json: current_user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:experience)
  end
end

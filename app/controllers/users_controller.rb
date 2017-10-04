class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    # binding.pry
    @user = User.find(params[:id])
    if @user.update(update_params)
      redirect_to user_path
    else
      render 'edit'
    end
  end

  private

  def update_params
    params.require(:user).permit(:type, :name)
  end
end

class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attribute(:type, params[:user][:type])
      flash[:success] = 'Profile updated'
      redirect_to @user
    else
      render 'edit'
    end
  end
end

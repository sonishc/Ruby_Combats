class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def destroy
    User.find(params[:id]).destroy
    redirect_to users_url
  end
end

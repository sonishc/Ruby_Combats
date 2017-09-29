class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def destroy
    @users = User.all
    @users.find(params[:id]).destroy
    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { render json: @users }
    end
  end
end

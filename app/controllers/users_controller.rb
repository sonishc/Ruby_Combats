class UsersController < ApplicationController
  before_action :retrieve_users

  def index; end

  def destroy
    @users.find(params[:id]).destroy
    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { render json: @users }
    end
  end

  private

  def retrieve_users
    @users = User.all
  end
end

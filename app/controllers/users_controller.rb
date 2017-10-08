class UsersController < ApplicationController
  before_action :retrieve_users
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    @users = policy_scope(User)
    authorize User
    @roles = Role.all
    @current_user = current_user
  end

  def update
    @user = User.find(params[:id])
    authorize @user
    @user.update(secure_params)
    render users_url
  end

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

  def secure_params
    params.require(:user).permit(:role_id)
  end
end

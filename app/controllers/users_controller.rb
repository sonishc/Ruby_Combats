class UsersController < ApplicationController
  before_action :retrieve_users, :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    authorize @users
    @roles = Role.all
  end

  def update
    @user = User.find(params[:id])
    authorize @user
    @user.update(secure_params)
    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { render json: @users }
    end
  end

  def destroy
    @user = User.find(params[:id])
    authorize @user
    @users.find(params[:id]).destroy
    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { render json: @users }
    end
  end

  private

  def retrieve_users
    @users = policy_scope(User)
  end

  def secure_params
    params.require(:user).permit(:role_id)
  end
end

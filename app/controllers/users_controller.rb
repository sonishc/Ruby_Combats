class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token	
  before_action :authenticate_user!
  after_action :verify_authorized
  before_action :secure_params, if: :devise_controller?

  def index
    @users = User.all
    authorize User
  end

  def show
    @user = User.find(params[:id])
    authorize @user
  end

  def update
    @user = User.find(params[:id])
    authorize @user
    if @user.update(secure_params)
      redirect_to users_path, notice: 'User updated.'
    else
      redirect_to @user, alert: 'Unable to update user.'
    end
  end

  def destroy
    user = User.find(params[:id])
    authorize user
    user.destroy
    redirect_to users_path, notice: 'User deleted.'
  end

  private

  def secure_params
    params.require(:user).permit(:role_id)
  end
end
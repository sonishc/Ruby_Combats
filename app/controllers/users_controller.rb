class UsersController < ApplicationController
  def profile
    @user = current_user
  end

  def update_password
    @user = current_user
    @user.update(password_params)
    bypass_sign_in(@user)
    redirect_to users_profile_path
  end

  private

  def password_params
    params.require(:user).permit(:password, :password_confirmation)
  end
end

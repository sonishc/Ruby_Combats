class RegistrationsController < Devise::RegistrationsController
  respond_to :json

def create
        @user = User.new(sign_up_params)    
      if @user.save
        UserMailer.registration_confirmation(@user).deliver
        flash[:success] = "Please confirm your email address to continue"
        redirect_to '/users/sign_in'
      else
        flash[:error] = "Ooooppss, something went wrong!"
        render 'new'
      end
  end

  def update
    @user = current_user
    @user.build_image(image_params)
    @user.update(account_update_params)
    redirect_to users_profile_path
  end

  def sign_up(resource_name, resource)
    sign_in(resource_name, resource)
  end

  def sign_up_params
    devise_parameter_sanitizer.sanitize(:sign_up)
  end

  protected

  def after_sign_up_path_for(*)
    '/location'
  end

  def account_update_params
    devise_parameter_sanitizer.sanitize(:account_update)
  end

  def image_params
    params.require(:user).permit(:image)
  end

end

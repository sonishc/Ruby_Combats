class RegistrationsController < Devise::RegistrationsController
  respond_to :json
  def create
    build_resource(sign_up_params)

    if resource.save
      if resource.active_for_authentication?
        sign_up(resource_name, resource)
      else
        expire_session_data_after_sign_in!
      end
      redirect_to '/location'
    else
      clean_up_passwords resource
      render json: { error: true, message: resource.errors.full_messages }
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

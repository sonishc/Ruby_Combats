class RegistrationsController < Devise::RegistrationsController
  def create
    build_resource(sign_up_params)

    if resource.save
      if resource.active_for_authentication?
        sign_up(resource_name, resource)
      else
        expire_session_data_after_sign_in!
      end
      render json: { success: true }
    else
      clean_up_passwords resource
      render json: { success: false, message: resource.errors.full_messages }
    end
  end

  def sign_up(resource_name, resource)
    sign_in(resource_name, resource)
  end

  def sign_up_params
    devise_parameter_sanitizer.sanitize(:sign_up)
  end
end

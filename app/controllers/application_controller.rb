class ApplicationController < ActionController::Base
<<<<<<< 01fccaeb1329b91b27c1e01cad3cf0cd9985c658
  protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
=======
  # protect_from_forgery with: :exception
  protect_from_forgery with: :null_session
>>>>>>> choose user name and class
end

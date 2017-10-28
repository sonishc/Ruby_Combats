class ApplicationController < ActionController::Base
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_last_request_at

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name type])
  end

  private

  def user_not_authorized
    flash[:alert] = 'Access denied.'
    redirect_to(request.referrer || root_path)
  end

  def set_last_request_at
    current_user.update_attribute(:last_request_at, Time.current) if
      user_signed_in?
  end
end

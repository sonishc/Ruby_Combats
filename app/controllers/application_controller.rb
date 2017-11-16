class ApplicationController < ActionController::Base
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_locale, :set_last_request_at

  def change_locale
    current_user.update_attribute(:locale, params[:locale])
    redirect_back(fallback_location: user_session)
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name type])
    devise_parameter_sanitizer.permit(:account_update, keys: %i[name image_attributes:image password])
  end

  private

  def user_not_authorized
    flash[:alert] = 'Access denied.'
    redirect_to(request.referrer || root_path)
  end

  def set_locale
    I18n.locale = (current_user.locale unless current_user.nil?) ||
                  I18n.default_locale
  end

  def set_last_request_at
    current_user.update_attribute(:last_request_at, Time.current) if
      user_signed_in?
  end

  def broadcast(channel, msg)
    message = { channel: channel, data: msg }
    uri = URI.parse('http://localhost:9292/faye')
    Net::HTTP.post_form(uri, message: message.to_json)
  end
end

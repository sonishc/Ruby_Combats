class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_locale

  def change_locale
    current_user.update_attribute(:locale, params[:locale])
    redirect_back(fallback_location: user_session)
  end

  private

  def set_locale
    I18n.locale = (current_user.locale if current_user) || I18n.default_locale
  end
end

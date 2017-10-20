class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  protected

  def after_sign_up_path_for(*)
    '/users/profile/'
  end
end

class SessionsController < Devise::SessionsController
  respond_to :json

  def after_sign_up_path_for(*)
    '/users/sign_out/'
  end
end

class SessionsController < Devise::SessionsController

  respond_to :json
  protected
  def after_sign_in_path_for(*)
    '/persons/profile'
  end

end

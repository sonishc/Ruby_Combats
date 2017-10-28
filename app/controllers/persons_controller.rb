class PersonsController < ApplicationController
  def profile
    @user = current_user
    @users = User.where('last_request_at > ?', 1.minutes.ago)
  end
end

class PersonsController < ApplicationController

  def profile
    @user = current_user
    @users = User.all
  end

end

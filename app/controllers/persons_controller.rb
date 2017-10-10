class PersonsController < ApplicationController
  def profile
    @user = User.last
  end
end

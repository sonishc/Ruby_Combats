class LocationController < ApplicationController
  def index; end

  def update
    @user = User.find(current_user.id)
    if @user.update_attribute(:location, params.require(:location))
      redirect_to '/location/page'
    else
      render json: { error: true, message: @user.errors.full_messages }
    end
  end

  def page; end
end

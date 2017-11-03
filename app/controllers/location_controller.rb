class LocationController < ApplicationController
  def index
  end

  def update
    if params.require(:level) >= params.require(:level).to_s
      @user = User.find(current_user.id)

      if @user.update_attribute(:location, params.require(:location))
        redirect_to '/location/page'
      else
        render json: { error: true, message: @user.errors.full_messages }
      end
    else
      render json: { error: true, message: "Your level isn't enough to "\
        "choose this location. You are on #{current_user.level_id} level,"\
        "however at least #{params.require(:level)} needed!" }
    end
  end

  def page
    @users = User.where('last_request_at > ?', 1.minutes.ago)
  end
end

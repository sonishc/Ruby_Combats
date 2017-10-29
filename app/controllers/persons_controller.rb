class PersonsController < ApplicationController

  def profile
    @user = current_user
    @users = User.all
  end

  def new_message
  # Check if the message is private
  if recipient = params[:message].match(/@(\w+) (.+)/)
  # if recipient = params[:message].match(/@(.+) (.+)/)
    # It is private, send it to the recipient's private channel
    @channel = "/messages/private/#{recipient.captures.first}"
    @message = { :name => session[:name], :msg => recipient.captures.second }
  else
    # It's public, so send it to the public channel
    @channel = "/messages/public"
    @message = { :name => session[:name], :msg => params[:message] }
  end
 
  respond_to do |f|
    f.js
  end
end

end

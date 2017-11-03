# ApplicationController
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def broadcast(channel, msg)
    message = { channel: channel, data: msg }
    uri = URI.parse('http://localhost:9292/faye')
    Net::HTTP.post_form(uri, message: message.to_json)
  end
end

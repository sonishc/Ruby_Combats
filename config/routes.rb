Rails.application.routes.draw do
  devise_for :users
  put '/locale' => 'application#change_locale'
end

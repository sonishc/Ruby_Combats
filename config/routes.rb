Rails.application.routes.draw do
  devise_for :users
  get 'users/fight'
end

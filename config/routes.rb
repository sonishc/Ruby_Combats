Rails.application.routes.draw do
  patch 'users', to: 'users#update'
  devise_for :users
  resources :users
end

Rails.application.routes.draw do
  get 'persons/profile'
  devise_for :users
  root to: 'pages#index'
  get 'persons/profile', as: 'user_root'
end

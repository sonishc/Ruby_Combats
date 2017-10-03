Rails.application.routes.draw do
  get 'persons/profile'
  devise_for :users
  get 'persons/profile', as: 'user_root'
  devise_scope :user do
    root to: 'devise/sessions#new'
  end
end

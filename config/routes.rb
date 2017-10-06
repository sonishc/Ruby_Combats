Rails.application.routes.draw do
  devise_for :users
  get 'persons/profile', as: 'user_root'
  devise_scope :user do
    root to: 'devise/sessions#new'
    get '/users/sign_out', to: 'devise/sessions#destroy'
    get '/users/edit', to: 'devise/registrations#edit'
  end
end

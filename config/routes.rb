Rails.application.routes.draw do
  root to: 'static#index'
  get 'users/profile', to: 'users#profile'

  devise_for :users

  devise_scope :user do
    root to: 'devise/sessions#new'
    post '/users/signup', to: 'registrations#create'
    patch '/users/update_password' , to: 'users#update_password'
    put '/users/profile', to: 'registrations#update'
    get '/users/sign_out', to: 'devise/sessions#destroy'
    get '/users/edit', to: 'devise/registrations#edit'
  end
end

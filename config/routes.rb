Rails.application.routes.draw do
  get 'users/profile', to: 'users#profile'

  devise_for :users
  
  devise_scope :user do
    root to: 'devise/sessions#new'
    post '/users/signup', to: 'registrations#create'
    get '/users/sign_out', to: 'devise/sessions#destroy'
    get '/users/edit', to: 'devise/registrations#edit'
  end
end

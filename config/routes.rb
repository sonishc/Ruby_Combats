Rails.application.routes.draw do
  get 'persons/profile', to: 'persons#profile'

  devise_for :users
  devise_scope :user do
    post '/users/signup', to: 'registrations#create'
    root to: 'devise/sessions#new'
    get '/users/sign_out', to: 'devise/sessions#destroy'
    get '/users/edit', to: 'devise/registrations#edit'
  end
end

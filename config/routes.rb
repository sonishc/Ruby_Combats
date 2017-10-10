Rails.application.routes.draw do
  get 'persons/profile', to: 'persons#profile'

  devise_for :users
  devise_scope :user do
    post '/users/signup', to: 'registrations#create'
    get '/users/sign_up', to: 'devise/registrations#new'
  end
end

Rails.application.routes.draw do

  get 'users/profile', to: 'users#profile'

  devise_for :users, :controllers => {sessions: 'sessions'}
  
  devise_scope :user do
    root to: 'devise/sessions#new'
    post '/users/signup', to: 'registrations#create'
    get '/users/sign_out', to: 'devise/sessions#destroy'
    get '/users/edit', to: 'devise/registrations#edit'
  end

  patch 'users', to: 'users#update'
  resources :users, only: %i[index destroy update]

  get 'users/fight'
  post 'users/:id/addexp', to: 'users#add_experience'
  
  put '/locale' => 'application#change_locale'
end

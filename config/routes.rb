Rails.application.routes.draw do

<<<<<<< HEAD
  get 'users/profile', to: 'users#profile'
=======
  get 'persons/profile', to: 'persons#profile'
  get '/location', to: 'location#index'
  post '/location', to: 'location#update'
  get 'location/page', to: 'location#page'
>>>>>>> Add location

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

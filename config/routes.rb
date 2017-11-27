Rails.application.routes.draw do
  root to: 'static#index'
  get 'users/profile', to: 'users#profile'
  get '/location', to: 'location#index'
  post '/location', to: 'location#update'
  get 'location/page', to: 'location#page'
  post 'location/page', to: 'location#page'

  devise_for :users, :controllers => {sessions: 'sessions'}

  devise_scope :user do
    root to: 'devise/sessions#new'
    post '/users/signup', to: 'registrations#create'
    patch '/users/update_password' , to: 'users#update_password'
    put '/users/profile', to: 'registrations#update'
    get '/users/sign_out', to: 'devise/sessions#destroy'
    get '/users/edit', to: 'devise/registrations#edit'
  end

  patch 'users', to: 'users#update'
  resources :users, only: %i[index destroy update]

  post 'item/:id/remove',  to: 'items#remove_item'
  get 'fight/init', to: 'fight#initiate'
  get 'fight/confirm', to: 'fight#confirm_invite'
  get 'fight/users', to: 'fight#users'
  post 'fight/update', to: 'fight#update'

  get 'fight/:id', to: 'fight#index', :as => :fight
  
  post 'users/:id/addexp', to: 'users#add_experience'

  put '/locale' => 'application#change_locale'

end

Rails.application.routes.draw do
	get 'persons/profile', to: 'persons#profile'
  devise_for :users, :controllers => {sessions: 'sessions'}  
  devise_scope :user do
    root to: 'devise/sessions#new'
    post '/users/signup', to: 'registrations#create'
    get '/users/sign_out', to: 'devise/sessions#destroy'
    get '/users/edit', to: 'devise/registrations#edit'
  end
end

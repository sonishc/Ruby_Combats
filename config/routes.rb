Rails.application.routes.draw do
  patch 'users', to: 'users#update'
  resources :users, only: %i[index destroy update]
end

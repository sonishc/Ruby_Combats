Rails.application.routes.draw do
  resources :users, only: %i[index destroy]
end

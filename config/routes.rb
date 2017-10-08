Rails.application.routes.draw do
  devise_for :users
  get 'users/fight'
  post 'users/:id/addexp', to: 'users#add_experience'
end

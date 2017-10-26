Rails.application.routes.draw do
  devise_for :users
  get 'users/fight'
  post 'users/:id/addexp', to: 'users#add_experience'
  post 'users/:id/remove_item', to: 'users#remove_item'
end

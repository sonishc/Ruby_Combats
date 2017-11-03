Rails.application.routes.draw do
  devise_for :users
  get 'users/fight'
  post 'users/:id/addexp', to: 'users#add_experience'
  post 'item/:id/remove',  to: 'items#remove_item'
  get 'fight/init', to: 'fight#initiate'
  get 'fight/confirm', to: 'fight#confirm_invite'
  get 'fight/users', to: 'fight#users'
  post 'fight/update', to: 'fight#update'

  get 'fight/:id', to: 'fight#index', :as => :fight
end

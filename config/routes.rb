Rails.application.routes.draw do
  
  ##* STATIC: 
  root 'application#home'
  get '/visitor', to: 'application#visitor'
  
  ##* DEVISE:
  devise_for :admins, path: 'app', skip: :password
  
  ##? in case need to add backin the ability to sign_up for a new admin(user)   
  # devise_for :admins

  
  ##* All Api v1 routes
  # namespace :api do    
      resources :bookmarks, only: [:index, :create, :edit, :update, :destroy]
      get 'bookmark/search', to: 'bookmark#search'
  # end
  

end
Rails.application.routes.draw do
  
  ##* STATIC: 
  root 'application#home'
  get '/visitor', to: 'application#visitor'
  
  ##* DEVISE:
  devise_for :admins, path: 'app', skip: :password
  
  ##? in case need to add backin the ability to sign_up for a new admin(user)   
  # devise_for :admins

  ##* For All Front End Resource Related Requests 
  scope module: 'api', path: 'api' do
    
    ##* Initial bookmarkr routing
    get 'bookmarkr', to: 'bookmarkr#index'
    get 'search', to: 'bookmarkr#search'
    post 'add_bookmarkr', to: 'bookmarkr#new'

    ##* Future Scaff for Settings Config
    get 'settings', to: 'api#state'
  end
  

end
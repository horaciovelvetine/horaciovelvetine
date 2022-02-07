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
    
    ##* All Api v1 routes
    namespace :v1 do 
      resources :bookmarkr, path: 'bookmark', as: 'bookmark'
    end

    ##* Future Scaff for Settings Config
    get 'settings', to: 'api#state'
  end
  

end
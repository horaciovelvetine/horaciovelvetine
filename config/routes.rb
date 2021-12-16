Rails.application.routes.draw do
  
  ##* STATIC: 
  root 'application#home'
  get '/visitor', to: 'application#visitor'
  
  ##* DEVISE:
  devise_for :admins, path: 'app', skip: :password

  ##* HIRED_APP fetch resume tree
  namespace :hired do
    get '/:com_attn', to: 'hired#show'
  end

end

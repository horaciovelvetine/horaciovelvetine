Rails.application.routes.draw do
  
  
  ##* STATIC: Path to main React application --> other links treat like API?? 
  root 'application#home'
  
  ##* DEVISE: admin access
  devise_for :admins

  ##* HIRED_APP fetch resume tree
  namespace :hired do
    get '/:com_attn', to: 'hired#show'
  end

  # ##* HOME STUFF
  # namespace :home do

  #   ##* KTCHN
  #   namespace :ktchn do

  #   end
  
  # end
  
end

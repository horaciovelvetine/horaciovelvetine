Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  ##* STATIC 
  ## Path to application
  root 'application#home'

  ##* HIRED_APP RELATED ROUTING
  namespace :hired do
    get '/:com_attn', to: 'hired#show'
  end

  

end

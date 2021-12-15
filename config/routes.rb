Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  
  ##* STATIC: Path to main React application --> other links treat like API?? 
  root 'application#home'

  
  ##* HIRED_APP RELATED ROUTING
  namespace :hired do
    get '/:com_attn', to: 'hired#show'
  end


  ##* HOME STUFF
  namespace :home do

    ##* KTCHN
    namespace :ktchn do

    end
  
  end

end

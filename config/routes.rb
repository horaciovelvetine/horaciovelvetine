Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'application#home'

  namespace :hir do
    get '/:com_attn', to: 'hired#show'
  end
end

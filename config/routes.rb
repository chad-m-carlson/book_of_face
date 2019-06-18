Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :people, only: [:index, :show, :update] do
      resources :friends, only: [:index, :new, :create, :destroy]
    end
  end
end

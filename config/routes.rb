Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :people, only: [:index, :show, :update, :create] do
      resources :friends, only: [:index, :new, :create,  :destroy]
    end
    resources :users, only: [] do
      resources :comments, only: [:index, :create, :edit, :destroy]
    end
    get "persons/:person_id/comments", to: "comments#persons_comments"
    get "random/people", to: "people#random_people"
  end
end

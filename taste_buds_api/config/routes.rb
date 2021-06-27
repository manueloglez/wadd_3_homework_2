Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :recipes, only: [:index, :show, :update, :create, :destroy] do
        resources :reviews, only: [:create, :destroy]
      end
      resource :session, only: [:create, :destroy]
      resources :users, only: [:index, :show, :create] do
        get :current, on: :collection # -> /api/v1/users/current
      end
    end
    match "*unmatched_route", to: "application#not_found", via: :all
  end
end

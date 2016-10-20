Rails.application.routes.draw do
  get 'signup' => "users#new"
  post 'users/' => "users#create"
  get "users/:id" => "users#show"


  root "articles#index"
  resources :articles
  get "login" => "sessions#new"
  post "login" => "sessions#create"
  get "logout" => "sessions#destroy"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

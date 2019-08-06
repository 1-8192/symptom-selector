Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :symptoms, only: [:index]
  resources :diagnoses, only: [:index]

end

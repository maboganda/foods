# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :v1 do
    resources :dashboard, only: :index

    resources :admins, only: %i[create]

    resources :me, only: :index

    resources :customers, only: %i[index]

    resources :orders, only: %i[index]
  end

  resources :tokens, only: [] do
    collection do
      post :authenticate
      post :sign_out
    end
  end

  match '/404', to: 'errors#err_not_found', via: :all
  match '/500', to: 'errors#internal_server_error', via: :all
end

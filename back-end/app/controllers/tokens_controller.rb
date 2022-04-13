class TokensController < ApplicationController
  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])

    raise Errors::Unauthorized, command.errors.full_messages.to_sentence unless command.success?

    cookies.signed[:auth_token] = { value: command.result, httponly: true }

    render json: { auth_token: command.result }, status: :ok
  end

  def sign_out
    cookies.delete(:auth_token)
  end
end

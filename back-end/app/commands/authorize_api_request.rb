# frozen_string_literal: true

class AuthorizeApiRequest
  prepend SimpleCommand

  attr_reader :tokens

  def initialize(cookies)
    @tokens = cookies.signed[:auth_token]
  end

  def call
    authentication
  end

  private

  def authentication
    return Authentication.find(decoded_auth_token[:auth_id]) if decoded_auth_token

    errors.add(:token, 'Token invalid')

    nil
  end

  def decoded_auth_token
    JsonWebToken.decode(tokens)
  end
end

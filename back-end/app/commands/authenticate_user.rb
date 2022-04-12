# frozen_string_literal: true

# Used for Authentication using email and password
class AuthenticateUser
  prepend SimpleCommand
  include ActiveModel::Validations

  attr_reader :email, :password

  def initialize(email, password)
    @email = email
    @password = password
  end

  def call
    authentication
  end

  private

  def authentication
    auth = Authentication.find_by(email:)

    return JsonWebToken.encode(auth_id: auth.id) if auth&.authenticate(password)

    errors.add(:invalid, 'email or password')
    nil
  end
end

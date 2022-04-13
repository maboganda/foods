# frozen_string_literal: true

module Authenticatable
  extend ActiveSupport::Concern
  include ActionController::Cookies

  def current_auth=(authentication)
    Authentication.current = authentication
  end

  def current_auth
    Authentication.current ||= nil
  end

  def current_admin=(admin)
    Admin.current = admin
  end

  def current_admin
    Admin.current ||= nil
  end

  private

  def authenticate_request
    command = AuthorizeApiRequest.call(cookies)

    if command.success?
      Authentication.current = command.result
      Admin.current = current_auth.authorizable
    end

    raise Errors::Unauthorized, 'Not Authorized!' unless current_auth
  end
end

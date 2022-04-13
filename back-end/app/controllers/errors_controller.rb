class ErrorsController < ApplicationController
  def not_found_error
    raise Errors::NotFound, 'The endpoint you are looking for does not exist.'
  end

  def internal_server_error
    raise Errors::InternalServerError, 'Internal Server Error'
  end
end

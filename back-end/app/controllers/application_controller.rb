class ApplicationController < ActionController::API
  include ActionController::Cookies
  include Errors
  include Responses
  include Pagination
  include Authenticatable
end

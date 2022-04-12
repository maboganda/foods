# frozen_string_literal: true

module Errors
  class UnprocessableEntity < StandardError; end
  class NotFound < StandardError; end
  class Unauthorized < StandardError; end
  class InternalServerError < StandardError; end
end

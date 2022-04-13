module Responses
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable
    rescue_from ActiveRecord::RecordNotFound, with: :unprocessable
    rescue_from ActionController::ParameterMissing, with: :unprocessable
    rescue_from ActionController::BadRequest, with: :unprocessable

    rescue_from Errors::UnprocessableEntity, with: :unprocessable
    rescue_from Errors::NotFound, with: :not_found
    rescue_from Errors::Unauthorized, with: :unauthorized
    rescue_from Errors::InternalServerError, with: :server_error
  end

  def created(model, options = {})
    render({ json: model, status: :created }.merge(options))
  end

  def updated(data = nil, options = {})
    return head :no_content if data.nil?

    render({ json: data }.merge(options))
  end

  def destroyed
    head :no_content
  end

  def bad_request
    render json: { error: 'Bad Request' }, status: :bad_request
  end

  private

  def unprocessable(error = nil)
    log_error_for_dev(error)

    if error.nil?
      render json: { error: 'Unprocessable Entity' }, status: :unprocessable_entity
    elsif error.is_a?(Array)
      render json: { error: error }, status: :unprocessable_entity
    else
      msg = determine_error(error)
      render json: { error: msg }, status: :unprocessable_entity
    end
  end

  def not_found(error = nil)
    log_error_for_dev(error)

    render json: { error: 'Not Found' }, status: :not_found
  end

  def unauthorized(error = nil)
    log_error_for_dev(error)

    render json: { error: determine_error(error) || 'Unauthorized' }, status: :unauthorized
  end

  def server_error(error = nil)
    log_and_report_error(error)

    if error.nil? || Rails.env.production? || Rails.env.demo?
      render json: { error: 'Internal Server Error' }, status: :internal_server_error
    else
      render json: { error: determine_error(error) }, status: :internal_server_error
    end
  end

  def log_error_for_dev(error)
    return unless error

    Rails.logger.error(error.to_s)
  end

  def determine_error(error)
    return if error.nil? || error.try(:message) == error.class.name
    return error.message if error.respond_to?(:message)
    return error.messages.first if error.respond_to?(:messages)

    error
  end
end

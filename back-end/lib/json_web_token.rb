# frozen_string_literal: true

module JsonWebToken
  JWT_SECRET = Rails.application.secrets.secret_key_base

  class << self
    def encode(payload, exp = 24.hours.from_now)
      payload[:exp] = exp.to_i

      JWT.encode(payload, JWT_SECRET)
    end

    def decode(token)
      body = JWT.decode(token, JWT_SECRET)
      body ? HashWithIndifferentAccess.new(body[0]) : false
    rescue JWT::DecodeError, JWT::ExpiredSignature, JWT::VerificationError => _e
      false
    end
  end
end

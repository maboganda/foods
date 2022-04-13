class Authentication < ApplicationRecord
  belongs_to :authorizable, polymorphic: true

  has_secure_password

  class << self
    def current_id
      current&.id
    end

    def current=(auth)
      RequestStore.store[:current_auth] = auth
    end

    def current
      RequestStore.store[:current_auth] ||= nil
    end
  end
end

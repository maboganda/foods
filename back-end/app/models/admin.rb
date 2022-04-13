class Admin < ApplicationRecord
  has_one :authentication, as: :authorizable, dependent: nil

  accepts_nested_attributes_for :authentication

  validates :email, :first_name, :last_name, :mobile_number, presence: true
  validates :email, :mobile_number, uniqueness: true

  class << self
    def current=(admin)
      RequestStore.store[:admin] = admin
    end

    def current
      RequestStore.store[:admin] ||= nil
    end
  end
end

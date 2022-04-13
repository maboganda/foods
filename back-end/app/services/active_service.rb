# frozen_string_literal: true

class ActiveService
  def self.call(*args, &block)
    new(*args, &block).call
  end
end

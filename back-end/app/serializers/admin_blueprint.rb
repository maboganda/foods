# frozen_string_literal: true

class AdminBlueprint < Blueprinter::Base
  identifier :id

  fields :first_name, :last_name, :email, :mobile_number, :birthdate
end

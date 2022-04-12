class CustomerBlueprint < Blueprinter::Base
  identifier :id

  fields :first_name, :last_name, :email, :mobile_number
end

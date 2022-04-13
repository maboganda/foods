class OrderBlueprint < Blueprinter::Base
  identifier :id

  fields :billing, :delivery, :total_amount, :remarks, :status
  field :customer, blueprint: CustomerBlueprint
end

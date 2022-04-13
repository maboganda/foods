class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders, id: :uuid do |t|
      t.references :customer, type: :uuid
      t.json :billing
      t.json :delivery
      t.float :total_amount
      t.text :remarks
      t.integer :status
      t.timestamps
    end
  end
end

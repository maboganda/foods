class CreateOrderItems < ActiveRecord::Migration[6.1]
  def change
    create_table :order_items, id: :uuid do |t|
      t.references :order, type: :uuid
      t.references :item, type: :uuid
      t.integer :quantity
      t.integer :sub_amount
      t.timestamps
    end
  end
end

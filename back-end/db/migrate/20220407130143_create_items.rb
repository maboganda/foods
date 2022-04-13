class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items, id: :uuid do |t|
      t.references :category, type: :uuid
      t.string :name
      t.string :description
      t.float :price, default: 0.0
      t.integer :quantity
      t.integer :quantity_type
      t.integer :kind
      t.integer :status
      t.timestamps
    end
  end
end

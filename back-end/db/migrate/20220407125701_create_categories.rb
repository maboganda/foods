class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories, id: :uuid do |t|
      t.string :title
      t.integer :kind
      t.integer :status
      t.timestamps
    end
  end
end

class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers, id: :uuid do |t|
      t.string :first_name
      t.string :last_name
      t.string :mobile_number
      t.string :email
      t.date :birthdate
      t.timestamps
    end
  end
end

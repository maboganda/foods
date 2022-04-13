class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins, id: :uuid do |t|
      t.string :first_name
      t.string :last_name
      t.string :mobile_number
      t.string :email
      t.date :birthdate
      t.timestamps
    end

    add_index :admins, :email, unique: true
    add_index :admins, :mobile_number, unique: true
  end
end

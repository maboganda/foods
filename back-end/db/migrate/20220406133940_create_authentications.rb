class CreateAuthentications < ActiveRecord::Migration[6.1]
  def change
    create_table :authentications, id: :uuid do |t|
      t.references :authorizable, polymorphic: true, type: :uuid
      t.string :email
      t.string :password_digest
      t.timestamps
    end

    add_index :authentications, :email
  end
end

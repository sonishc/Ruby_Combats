class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :hp
      t.string :state
      t.integer :experience
      t.integer :level
      t.string :locale
      t.integer :role
      t.string :type

      t.timestamps
    end
  end
end

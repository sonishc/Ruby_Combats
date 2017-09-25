# create user migration
class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :hp, default: 100
      t.integer :experience
      t.integer :level, default: 0
      t.string :locale, default: 'en'
      t.integer :role, default: 0

      t.timestamps
    end
  end
end

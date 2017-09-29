class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|

      t.string :name, limit: 99
      t.string :email
      t.string :password_digest
      t.string :locale, default: 'en'
      t.integer :hp, default: 100
      t.integer :experience
      t.references :role, index: true

      t.timestamps
    end
  end
end

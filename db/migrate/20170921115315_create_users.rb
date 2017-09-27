# create user migration
class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      # t.belongs_to :level, foreign_key: true
      # t.belongs_to :role, foreign_key: true

      t.string :name
      t.string :email
      t.string :password_digest
      t.string :locale, default: 'en'
      t.integer :hp, default: 100
      t.integer :experience

      t.timestamps
    end
  end
end

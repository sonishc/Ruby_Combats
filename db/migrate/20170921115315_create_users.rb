class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.belongs_to :role, index: true
      t.string :name, limit: 99
      t.string :email
      t.string :locale, default: 'en'
      t.integer :hp, default: 100
      t.integer :experience

      t.timestamps
    end
  end
end

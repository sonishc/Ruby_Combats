class CreateFights < ActiveRecord::Migration[5.1]
  def change
    create_table :fights do |t|
      t.integer :initiator
      t.integer :opponent
      t.string :fight_hash

      t.timestamps
    end
  end
end

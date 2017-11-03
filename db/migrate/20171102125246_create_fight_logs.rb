class CreateFightLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :fight_logs do |t|
      t.integer :fight_id
      t.integer :attack
      t.integer :block
      t.integer :item_id
      t.integer :user_id
      t.float :damage

      t.timestamps
    end
  end
end

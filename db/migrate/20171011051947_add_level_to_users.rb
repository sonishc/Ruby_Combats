class AddLevelToUsers < ActiveRecord::Migration[5.1]
  def change
    add_reference :users, :level, foreign_key: true, default: 1
    change_column :users, :experience, :integer, default: 0
  end
end

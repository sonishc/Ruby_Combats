class CreateSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :skills do |t|
      t.integer :power
      t.integer :dexterity
      t.integer :instinct
      t.integer :stamina
      t.integer :experience

      t.timestamps
    end
  end
end

class CreateSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :skills do |t|
      t.belongs_to :user, index: true
      t.integer :power, default: 1
      t.integer :dexterity, default: 1
      t.integer :instinct, default: 1
      t.integer :stamina, default: 1

      t.timestamps
    end
  end
end

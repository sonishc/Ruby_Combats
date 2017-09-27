class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.string :category
      t.string :hierarchy
      t.integer :hp
      t.integer :armor
      t.integer :power
      t.integer :instinct
      t.integer :stamina
      t.integer :dexterity

      t.timestamps
    end
  end
end

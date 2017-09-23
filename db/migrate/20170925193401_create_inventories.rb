class CreateInventories < ActiveRecord::Migration[5.1]
  def change
    create_table :inventories do |t|
      t.references :user, index: true
      t.references :item, index: true
      t.boolean :equipped, default: false
      t.timestamps
    end
  end
end

class CreateInventories < ActiveRecord::Migration[5.1]
  def change
    create_table :inventories do |t|
      # t.belongs_to :user, foreign_key: true
      # t.belongs_to :item, foreign_key: true
      t.boolean :equipped, default: false
      t.timestamps
    end
  end
end

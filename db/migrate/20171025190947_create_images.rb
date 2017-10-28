class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.attachment :image
      t.references :attachable, polymorphic: true, index: true
      t.timestamps
    end

    add_index :images, %i[attachable_id attachable_type]
  end
end

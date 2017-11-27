class AddItemEffectsToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :effect_type, :integer, default: 0
    add_column :items, :effect_value, :float, default: 0
  end
end

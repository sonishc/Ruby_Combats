class CreateLevels < ActiveRecord::Migration[5.1]
  def change
    create_table :levels do |t|
      t.integer :experience_level
      t.integer :health_point_level
    end
  end
end

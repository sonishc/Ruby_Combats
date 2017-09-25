# CreateLevels
class CreateLevels < ActiveRecord::Migration[5.1]
  def change
    create_table :levels do |t|
      t.integer :level_experience
      t.integer :level_health_point
    end
  end
end

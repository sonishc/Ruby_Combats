class AddWinnerToFight < ActiveRecord::Migration[5.1]
  def change
    add_column :fights, :winner, :integer
  end
end

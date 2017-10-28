class AddLastRequestAtUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :last_request_at, :datetime
  end
end

class ItemsController < ApplicationController
  before_action :authenticate_user!

  def remove_item
    item = Inventory.find_by(user_id: current_user.id,
                             item_id: params[:id])
    if item.count > 1
      item.update_attributes(count: item.count - 1)
    else
      item.destroy
    end
  end
end

class ItemsController < ApplicationController
  def index
    @items = Item.all
    @images = @items.map(&:image)
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    @item.build_image(image_params)
    @items = Item.all
    if @item.save(item_params)
      respond_to do |format|
        format.html { redirect_to items_path }
        format.json { render json: @items }
      end
    end
  end

  private

  def item_params
    params.require(:item).permit(:item_name, :category, :hierarchy, :hp, :armor, :power,
                                 :instinct, :stamina, :dexterity,
                                 image_attributes: :image)
  end

  def image_params
    params.require(:item).permit(:image)
  end
end

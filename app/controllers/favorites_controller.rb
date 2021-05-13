class FavoritesController < ApiController
  def index
    @favorites = current_user.favorites

    render json: @favorites
  end

  def create
    @product = Product.find(params[:product_id])

    if current_user.favorite_products << @product
      render json: current_user.favorite_products
    else
      render json: current_user.errors
    end
  end

  def destroy
    @product = Product.find(params[:id])

    current_user.favorite_products.delete(@product)
  end
end

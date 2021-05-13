class FavoritesController < ApiController
  def index
    @favorites = current_user.favorites

    render json: @favorites
  end

  def create
    @product = Product.find(params[:product_id])

    if current_user.products << @product
      render json: current_user.products
    else
      render json: current_user.errors
    end
  end

  def destroy
    @product = Product.find(params[:product_id])

    current_user.products.delete(@product)
  end
end

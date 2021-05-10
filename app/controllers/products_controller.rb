class ProductsController < ApiController
  skip_before_action :authenticate_user!, only: %i[index show]
  before_action :set_product, only: %i[show update destroy]

  def index
    @products = Product.all

    render json: @products
  end

  def show
    render json: @product, include: [:user]
  end

  def create
    @product = current_user.products.build(product_params)

    if product.save
      render json: @product
    else
      render json: @product.errors
    end
  end

  def update
    if @product.user == current_user && @product.update(product_params)
      render json: @product
    else
      render json: @product.errors
    end
  end

  def destroy
    if @product.user == current_user && @product.destroy
      render json: { message: 'Your product has been successfully deleted.' }
    else
      render json: @product.errors
    end
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :price, :img_url, :description, :category)
  end
end

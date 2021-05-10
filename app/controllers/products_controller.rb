class ProductsController < ApiController
  skip_before_action :authenticate_user!, only: %i[index show]

  def index
    @products = Product.all

    render json: @products
  end

  def show
    @product = Product.find(params[:id])

    render json: @product, include: [:user]
  end

  def create
    @product = Product.new(product_params)

    if product.save
      render json: @product
    else
      render json: @product.errors
    end
  end

  def update
    @product = Product.find(params[:id])

    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors
    end
  end

  def destroy
    set_product
    @product.destroy
    render json: { message: 'Your product has been successfully deleted.' }
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :price, :img_url, :description, :category)
  end
end

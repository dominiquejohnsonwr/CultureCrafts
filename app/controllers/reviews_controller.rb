class ReviewsController < ApiController
  skip_before_action :authenticate_user!, only: %i[index show]
  before_action :set_review, only: %i[show update destroy]

  # GET /reviews
  def index
    @reviews = Product.find(params[:product_id]).reviews

    render json: @reviews, include: [:product]
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @product = Product.find(params[:product_id])
    @review = @product.reviews.build(review_params)

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_review
    @review = Review.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def review_params
    params.require(:review).permit(:content, :product_id, :user_id)
  end
end

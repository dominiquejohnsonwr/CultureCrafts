class UsersController < ApiController
  skip_before_action :authenticate_user!, only: %i[index show create]

  def index
    @users = User.all

    render json: @users
  end

  def show
    @user = User.find(params[:id])

    render json: @user, include: [:products]
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors
    end
  end

  def destroy
    set_user
    @user.destroy
    render json: { message: "#{@user.name} has been deleted." }
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def user_params
    params.require(:user).permit(:name, :email, :profile_img)
  end
end

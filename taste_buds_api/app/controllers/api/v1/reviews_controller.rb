class Api::V1::ReviewsController < Api::ApplicationController
  before_action :authenticate_user!

  def create
    @recipe = Recipe.find params[:recipe_id]
    @review = Review.new review_params
    @review.recipe = @recipe
    @review.user = current_user
    if @review.save
      render json: {id: @review.id}
    else 
      render(
        json: {errors: @review.errors},
        status: 422
      )
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review.destroy
      head :ok
    else
      head :bad_request
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating)
  end
  def find_review
    @review = Review.find params[:id]
  end
end

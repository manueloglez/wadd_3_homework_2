class Api::V1::RecipesController < Api::ApplicationController
  before_action :find_recipe, only: [:show, :destroy]
  before_action :authenticate_user!, only:[:create, :destroy]
  
  def index
    recipes = Recipe.order created_at: :desc
    render json: recipes
  end

  def show
    render json: @recipe
  end
  def destroy
    if @recipe.destroy
      head :ok
    else
      head :bad_request
    end
  end

  def create
    recipe = Recipe.new recipe_params
    recipe.user = current_user
    if recipe.save
      render json: {id: recipe.id}
    else
      render(
        json: {errors: recipe.errors},
        status: 422
      )
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(
      :title, 
      :description, 
      :story, 
      :serving,
      :salty, 
      :sweet, 
      :spicy)
  end
  def find_recipe
    @recipe = Recipe.find params[:id]
  end
end

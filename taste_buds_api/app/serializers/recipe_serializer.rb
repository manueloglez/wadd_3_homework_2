class RecipeSerializer < ActiveModel::Serializer
  attributes(:id, :title, 
  :description, 
  :story, 
  :serving,
  :salty, 
  :sweet, 
  :spicy)
  has_many :reviews

  class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :rating
  end
end
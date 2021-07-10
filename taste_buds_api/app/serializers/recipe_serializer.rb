class RecipeSerializer < ActiveModel::Serializer
  attributes(:id, :title, 
    :created_at,
  :description, 
  :story, 
  :serving,
  :salty, 
  :sweet,
  :image_url, 
  :spicy)
  has_many :reviews

  class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :rating, :user
  end
end
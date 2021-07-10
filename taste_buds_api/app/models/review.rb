class Review < ApplicationRecord
  belongs_to :recipe
  belongs_to :user
  validates(:rating, numericality: { lower_than: 6, greater_than_or_equal: 0})

end

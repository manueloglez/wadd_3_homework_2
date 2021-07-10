class Recipe < ApplicationRecord
  has_many :reviews, dependent: :destroy
  belongs_to :user

  validates(:serving, numericality: { lower_than: 51 })
  validates(:title, presence: true, uniqueness: true)
  validates(
    :description, 
    presence: { message: "must include a description" },
    length: { minimum: 10 },
  )
  default_url = "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"

  before_save do
    self.spicy = false unless spicy
    self.sweet = false unless sweet
    self.salty = false unless salty
    self.image_url = default_url unless image_url
  end
end

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

  before_save do
    self.spicy = false unless spicy
    self.sweet = false unless sweet
    self.salty = false unless salty
  end
end

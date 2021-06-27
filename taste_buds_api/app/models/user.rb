class User < ApplicationRecord
  has_secure_password
  validates(
    :email, 
    uniqueness: true,
    presence: true,
    format: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  )
  has_many :recipes, dependent: :destroy
  has_many :reviews, dependent: :destroy
end

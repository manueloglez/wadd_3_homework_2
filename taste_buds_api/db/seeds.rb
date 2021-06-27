# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "123"

Review.delete_all
Recipe.delete_all
User.delete_all

super_user = User.create(
  first_name: "Manuel",
  last_name: "Gonzalez",
  email: "mang.95@gmail.com",
  password: PASSWORD,
)

10.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: PASSWORD,
  )
end

users = User.all

10.times do
  recipe = Recipe.create(
    title: Faker::Food.dish,
    story: Faker::GreekPhilosophers.quote,
    description: Faker::Food.description,
    serving: rand(50),
    spicy: rand(10) > 5,
    salty: rand(10) > 5,
    sweet: rand(10) > 5,
    user: users.sample,
  )
  if recipe.valid?
    recipe.reviews = rand(0..15).times.map do
      Review.new(
        body: Faker::GreekPhilosophers.quote,
        rating: rand(5),
        user: users.sample,
      )
    end
  end
end
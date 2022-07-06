# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

apartments_array = [
    {
    street: "123 Snoring Ln.",
    city: "New Foundland",
    state: "ND",
    manager: "Peter Petigrew",
    email: "peter67@yahoo.com", 
    price: "$250,000", 
    bedrooms: 1, 
    bathrooms: 1, 
    pets: "No",
    image: "https://thiscatdoesnotexist.com/"
    },
    {
    street: "8750 Poland Dr.",
    city: "Philadelphia",
    state: "PA",
    manager: "Ronald McDonald",
    email: "rm1955@aol.com", 
    price: "$740,000", 
    bedrooms: 3, 
    bathrooms: 2, 
    pets: "Mandatory",
    image: "https://thiscatdoesnotexist.com/"
    }
]

apartments_array.each do |apartment_obj|
    user.apartments.create apartment_obj
  end

p user.apartments

p 'Apartments were made successfully.'
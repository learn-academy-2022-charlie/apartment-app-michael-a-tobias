# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'b@b.b').first_or_create(password: '123456', password_confirmation: '123456')

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
    image: "https://i.ibb.co/fphgHd8/Image-from-i-OS.jpg"
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
    image: "https://i.ibb.co/2nrG5Tx/Image-from-i-OS-4.jpg"
    },
    {
      street: "1223 Weird Bird Ct.",
      city: "Sulfur Lake",
      state: "WY",
      manager: "Tungsten Cobolt",
      email: "tcm@yahoo.com", 
      price: "$140,000", 
      bedrooms: 90, 
      bathrooms: 1, 
      pets: "Yes",
      image: "https://i.ibb.co/PNG3DgH/Image-from-i-OS-3.jpg",
      user_id: 2
    },
    {
      street: "90 Amberly Way",
      city: "Satan Crater",
      state: "NJ",
      manager: "Lilly Peppercorn",
      email: "lilmzpepp@hotmail.com", 
      price: "$40,140,000", 
      bedrooms: 2, 
      bathrooms: 1000, 
      pets: "no",
      image: "https://i.ibb.co/prPx8QZ/Image-from-i-OS-2.jpg",
      user_id: 2
    },
    {
      street: "1600 Pennsylvania Avenue NW",
      city: "Washington",
      state: "DC",
      manager: "J. Biden",
      email: "jbo@whitehouse.gov", 
      price: "$40,140,000", 
      bedrooms: 16, 
      bathrooms: 35, 
      pets: "yes",
      image: "https://i.ibb.co/kXJ0Vg9/Image-from-i-OS-1.jpg",
      user_id: 2
    }
]

apartments_array.each do |apartment_obj|
    user.apartments.create apartment_obj
  end

p user.apartments

p 'Apartments were made successfully.'
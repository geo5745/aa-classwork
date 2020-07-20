# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

buy_milk = Todo.create!(title: "buy milk", body: "only 2%", done: false)
fix_car = Todo.create!(title:"fix car", body:"rotate tires", done: false)
clean_room = Todo.create!(title: "clean room", body: "clean room", done: true)
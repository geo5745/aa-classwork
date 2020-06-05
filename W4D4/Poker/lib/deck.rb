# require "card"

require "ruby2d"

set title: "George's New Game"


Triangle.new(
  x1: 320, y1:  50,
  x2: 540, y2: 430,
  x3: 100, y3: 430,
  color: ['red', 'green', 'blue']
)

You can quit the app using the terminal or closing it the regular Apple way alt Q
show

#

# class Deck
#     attr_reader :value, :suite

#     def initialize
#         @deck = []
#         fill_deck
#     end

#     def fill_deck
#         suites = ["Spade", "Club", "Heart", "Diamond"]
#         values = (2..10).to_a.map(&:to_s) + ["A","K","Q","J"]     

#         suites.each do |suite|
#             values.each do |value|
#             @deck << Card.new(suite,value)
#             end  
#         end
#     end

#     # def shuffle
#     #     @deck.shuffle
#     # end

#     # def []=(card)
#     #     @deck
#     # end

# end


# # "1", "A" "J" "" ♣️ ♦️ ♠️ ♥️ 🃏 👑 
# # suites.each do |suite|
# #     [7] pry(main)*   values.each do |value|
# #     [7] pry(main)*     deck << Card.new(suite,value)
# #     [7] pry(main)*   end  
# #     [7] pry(main)* end
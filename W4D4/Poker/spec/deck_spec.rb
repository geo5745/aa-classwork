require "deck"
require "card"
describe Card do
    let(:suites) { ["Spade", "Club", "Heart", "Diamond"] }
    let(:values) { (2..10).to_a.map(&:to_s) + ["A","K","Q","J"] }    
    # "1", "A" "J" "" ♣️ ♦️ ♠️ ♥️ 🃏 👑 
    # suites.each do |suite|
    #     [7] pry(main)*   values.each do |value|
    #     [7] pry(main)*     deck << Card.new(suite,value)
    #     [7] pry(main)*   end  
    #     [7] pry(main)* end
    describe '#initialize' do
        it 'sets up the instance variables' do
            deck = []
            expect(deck.length).to eq(52)
            expect().to eq(true)
        end

        # fill deck Method 
        # shuffle card Method
        # 
    end
end
require "card"

describe Card do
    let(:suites) { ["Spade", "Club", "Heart", "Diamond"] }
    let(:values) { (2..10).to_a.map(&:to_s) + ["A","K","Q","J"] }
    # "1", "A" "J" "" ♣️ ♦️ ♠️ ♥️ 🃏 👑 

    describe '#initialize' do
        it 'sets up the instance variables' do
            value = "6"
            suite = "Spade"
            card = Card.new(suite, value)
            expect(suites.include?(card.suite)).to eq(true)
            expect(values.include?(card.value)).to eq(true)
        end
    end
end
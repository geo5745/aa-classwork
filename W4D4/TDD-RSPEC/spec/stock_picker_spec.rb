

#Goog = [10, 12, 543, 32, 123, 325 ]

require "stock_picker"

describe "#stock_picker" do
    let("google") {[10, 12, 543, 32, 123, 325 ]}
    let("amazon") {[11, 10, 1000, 9, 32, 123, 325 ]}
    let("hertz") {[100,99,98,50,10,2,0]}
    let(:empty_arr) {[]}

    it "expects to receive an array of numbers" do
        expect{stock_picker(["sample"])}.to raise_error(ArgumentError)
    end

    it "finds the indices of the most profitable set of days" do
        expect(stock_picker(google)).to eq([0,2])
        expect(stock_picker(amazon)).not_to eq([3,2])
        expect(stock_picker(amazon)).to eq([1,2])
    end

    it "returns nil if no profitable pair found" do
        expect(stock_picker(hertz)).to eq(nil)
    end

    it "returns nil if the array is smaller than 2 prices" do
        expect(stock_picker(empty_arr)).to eq(nil)
        expect(stock_picker([1])).to eq(nil)
    end

end


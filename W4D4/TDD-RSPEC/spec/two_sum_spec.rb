require "two_sum"

describe "#two_sum" do
    let(:test_array) {[-1, 0, 2, -2, 1]}
    let(:test_array2) {test_array.shuffle}

    it "returns indices that sum to zero" do
        expect(test_array.two_sum).to eq([[0, 4], [2, 3]])
    end

    it "returns pair indices sorted from smallest index to largest" do
        expect(test_array2.two_sum).to eq(test_array2.two_sum.sort)
    end

end
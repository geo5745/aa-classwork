require "remove_dups"

describe "#my_uniq" do
    let(:sample_arr) { [1,2,2,4,5].shuffle }
    it "elements of an array are unique" do
        expect([1, 2, 1, 3, 3].my_uniq).to eq([1,2,3])
    end

    it "returns unique elements in the order they first appeared" do
        expect(sample_arr.my_uniq).to eq(sample_arr.uniq)
    end

end
require "my_transpose"

describe "#my_transpose" do 
    let("rows") { rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ]}

      it "converts the matrix between the row oriented and col oriented for presentations" do
        expect(my_transpose(rows)).to eq(rows.transpose)
      end
end 
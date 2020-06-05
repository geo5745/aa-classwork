def my_transpose(arr)
    result = Array.new(arr.length) { Array.new(arr.length) }

    arr.each_with_index do |row, ridx|
        row.each_with_index do |cell, cidx|
            result[cidx][ridx] = cell
        end
    end

    result
end
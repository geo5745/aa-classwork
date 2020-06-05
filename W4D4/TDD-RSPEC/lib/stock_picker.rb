def stock_picker(prices)
    raise ArgumentError unless prices.is_a?(Array)
    raise ArgumentError unless prices.all? {|ele| ele.is_a?(Numeric)}
    min = 0
    max = 0

    prices.each_with_index do |price,idx|
        (idx+1...prices.length).each do |idx2|
            if prices[idx2] - prices[idx] > prices[max] - prices[min]
                max = idx2
                min = idx
            end
        end
    end
    [min,max].sum > 0 ?  [min,max] : nil
end
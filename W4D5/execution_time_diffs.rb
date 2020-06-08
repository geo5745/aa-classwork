require 'benchmark'

def my_min1(arr)
    arr.each_with_index do |val,i|
        return val if arr[i+1...-1].all? {|ele| val <= ele}
    end
end


def my_min2(arr)
    min = arr.first
    (1...arr.length).each do |val|
        min = val if val < min
    end
    min
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min1(list)
# time1 = Benchmark.measure {my_min1(list)}
# puts time1.real * 10000 

# p my_min1(list)
# time2 = Benchmark.measure {my_min2(list)}
# puts time2.real * 10000

def largest_contiguous_subsum1(arr)
    max = arr.sum
        (0...arr.length).each do |i|
            (i...arr.length).each do |j|
                sample_sum = arr[i..j].sum
                max = sample_sum if sample_sum > max
                # p arr[i..j]
                # p sample_sum
            end
        end
    max
end

list1 = [5, 3, -7] #8
list2 = [2, 3, -6, 7, -6, 7] #8
list3 = [-5, -1, -3] #-1
# p largest_contiguous_subsum1(list1)
# p largest_contiguous_subsum1(list2)
# p largest_contiguous_subsum1(list3)

# time = Benchmark.measure do
#     largest_contiguous_subsum1(list1)
#     largest_contiguous_subsum1(list2)
#     largest_contiguous_subsum1(list3)
# end

# puts time.real * 10000


def largest_contiguous_subsum2(arr)
    largest = arr.first
    current = arr.first
  
    (1...arr.length).each do |i|
      current = 0 if current < 0
      current += arr[i]
      largest = current if current > largest
    end
  
    largest
  end

#p largest_contiguous_subsum2(list1)
#p largest_contiguous_subsum2(list2)
#p largest_contiguous_subsum2(list3)

"bac"
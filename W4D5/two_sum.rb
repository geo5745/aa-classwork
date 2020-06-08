require 'benchmark'

def bad_two_sum?(arr,target)
    (0...arr.length).each do |i|
        search_item = target - arr[i]
        return true if arr[i+1..-1].include?(search_item)
    end
    false
end

arr = [0, 1, 5, 7]
time1 = Benchmark.measure do
    bad_two_sum?(arr, 6) # => should be true
    bad_two_sum?(arr, 10) # => should be false
end
p time1.real * 10000

# time complexity O(n**2)

def okay_two_sum?(arr,target)
    sorted = arr.sort
    (0...arr.length).each do |i|
        search_item = target - arr[i]
        return true if b_search(arr[i+1..-1],search_item) != nil
    end
    false
end

def b_search(arr,target)
    return nil if arr.length < 1
    mid = arr.length / 2
    left = arr.take(mid)
    right = arr.drop(mid+1)
    if arr[mid] == target
        return mid
    elsif target < arr[mid]
        return b_search(left,target)
    else
        return nil if b_search(right,target) == nil
        return (mid + 1 + b_search(right,target))
    end
    nil
end

time2 = Benchmark.measure do
    okay_two_sum?(arr, 6) # => should be true
    okay_two_sum?(arr, 10) # => should be false
end
p time2.real * 10000


def two_sum?(arr,target)
    my_hash = Hash.new(0)
    arr.each {|ele| my_hash[ele] += 1}
    #p my_hash
    arr.each do |ele| 
        search_item = target - ele
        if search_item == ele
            return true if my_hash[target] > 1
        else
            return true if my_hash.has_key?(search_item)
        end
    end
    false
end

time3 = Benchmark.measure do
    two_sum?(arr, 6) # => should be true
    two_sum?(arr, 10) # => should be false
end

p time3.real * 10000

def two_sum2(arr,target)
    my_hash = Hash.new

    arr.each_with_index do |ele,i|
        search_item = target - ele
        return [i, my_hash[search_item]] if my_hash.has_key?(search_item)
        my_hash[ele] = i
    end
    nil
end

p two_sum2(arr, 6) # => should be true
p two_sum2(arr, 10) # => should be false


time4 = Benchmark.measure do
    two_sum?(arr, 6) # => should be true
    two_sum?(arr, 10) # => should be false
end

p time4.real * 10000




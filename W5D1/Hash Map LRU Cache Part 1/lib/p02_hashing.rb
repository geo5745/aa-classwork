class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    hash_num = 0

    if self.is_a?(Integer) || self.is_a?(String)
      hash_num += self.hash
    else
      self.each_with_index do |ele, i|
        hash_num += (ele.hash) * i
      end
    end

    hash_num
  end
end

class String
  def hash
    alpha = ("a".."z").to_a
    hash_num = 0

    self.downcase.each_char.with_index do |char, i|
      hash_num += (alpha.index(char).hash) * i
    end

    hash_num
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    hash_sum = 0 

      self.each do |k,v|
        hash_sum += k.hash
        hash_sum += v.hash
      end
    hash_sum
  end
end

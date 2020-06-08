class MaxIntSet
  attr_reader :store

  def initialize(max)
    @store = Array.new(max,false)
  end

  def insert(num)
    if is_valid?(num)
      self.store[num] = true
    else
      raise "Out of bounds"
    end
  end

  def remove(num)
    self.store[num] = false
  end

  def include?(num)
    self.store[num]
  end

  private

  def is_valid?(num)
    num.between?(0,self.store.length-1)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    if !self.include?(num)
      self[num] << num
    end
  end

  def remove(num)
    if self.include?(num)
      self[num].delete(num)
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    @store[num % 20]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count, :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! unless @count < num_buckets
    if !self[num].include?(num)
      self[num] << num
      @count += 1
    end
  end

  def remove(num)
    if self[num].include?(num)
      self[num].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    self[num].any? {|ele| ele == num}
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_store = ResizingIntSet.new(num_buckets * 2)
    (0...num_buckets).each do |i|
      self[i].each do |ele|
        new_store.insert(ele)
      end
    end
    @store = new_store.store

  end
end

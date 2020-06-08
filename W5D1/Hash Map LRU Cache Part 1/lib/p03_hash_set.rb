class HashSet
  attr_reader :count, :store

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    bucket = key.hash % num_buckets
    if !self.store[bucket].include?(key)
      self.store[bucket] << key
      @count += 1
      resize! if @count > num_buckets
    end
  end

  def include?(key)
    self[key].any? {|ele| ele.hash == key.hash}
  end

  def remove(key)
    if self[key].include?(key)
      self[key].delete(key)
      @count -= 1
    end
  end

  private

  def [](key)
    @store[key.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_store = HashSet.new(num_buckets * 2)
    (0...num_buckets).each do |i|
      self[i].each do |ele|
        new_store.insert(ele)
      end
    end
    @store = new_store.store

  end
end

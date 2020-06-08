require_relative 'p04_linked_list'

class HashMap
  attr_accessor :count, :store

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    bucket(key).include?(key)
  end

  def set(key, val)
    # resize! if @count > num_buckets
    linked_list = bucket(key)
    if self.include?(key)
      bucket(key).update(key,val)
    else
      bucket(key).append(key,val)
      @count +=1
    end
  end

  def get(key)
    @store[key.hash % num_buckets]
  end

  def delete(key)
    if self[key].include?(key)
      self[key].delete(key)
      @count -= 1
    end
  end

  def each
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    new_store = HashMap.new(num_buckets * 2)
    (0...num_buckets).each do |i|
      self[i].each do |ele|
        new_store.insert(ele)
      end
    end
    @store = new_store.store

  end
  

  def bucket(key)
    @store[key.hash % num_buckets]
  end
end

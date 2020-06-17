require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  #@@all = []

  def self.columns
    @columns ||= []
    arr = []
    if @columns.empty?
      arr = DBConnection.execute2(<<-SQL)
        SELECT
          *
        FROM
          #{self.table_name}
        SQL
    end
    @columns = arr[0].map(&:to_sym)
    @columns
  end

  def self.finalize!
    columns = self.columns
    columns.each do |column|
      define_method(column) do
        @attributes[column]
      end
      define_method(column) do |val|
        @attributes[column] = val
      end
      
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    (self.to_s + "s").downcase
  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end

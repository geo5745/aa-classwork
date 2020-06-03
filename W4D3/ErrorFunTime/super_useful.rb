# PHASE 2
def convert_to_int(str)
  begin
    Integer(str)
  rescue ArgumentError
    return nil
  end
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]
class NotCoffeeError < StandardError; end

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"      
  elsif maybe_fruit == "coffee"
    raise NotCoffeeError 
  else
    raise StandardError
  end  
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"

  begin
    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    reaction(maybe_fruit) 
  rescue NotCoffeeError
    retry
  rescue
    puts "i dont like #{maybe_fruit}"
  end

end  

# PHASE 4
class InsufficientYearsError < StandardError; end 
class NoNameError < StandardError; end 
class NoPassTimeError < StandardError; end 

class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    begin
      @name = name
      @yrs_known = yrs_known
      @fav_pastime = fav_pastime
      raise InsufficientYearsError.new("Not Friends Long Enough") if @yrs_known < 5
      raise NoNameError.new("No Name Entered") if @name.length == 0
      raise NoPassTimeError.new("No Pass Time Entered") if @fav_pastime.length == 0
    rescue InsufficientYearsError
      p "Not Friends Long Enough, try again"
    rescue NoNameError
      p "No Name Entered"
    rescue NoPassTimeError
      p "No Pass Time Entered"
    end
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


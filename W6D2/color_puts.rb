#might have to gem install colorize
#If you don't want your puts command to print with a random color every time, don't paste this code at the top of your file :wink:
require 'colorize'

module Kernel
    
    def puts(obj)
        colors = ['blue','cyan','yellow','green','white','red','magenta']
        random_color = colors.sample
        $stdout.puts(obj.send(random_color))
    end
end
#-------------------------------------------------
10.times { puts "Hello, World!"}

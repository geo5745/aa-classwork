require_relative "./piece.rb"
require_relative "./slideable.rb"


class Bishop < Piece

    include Slideable

    def move_dirs
        diagonal_dirs
    end 

    def symbol
        '♝'.colorize(color)
    end

    def inspect
        self.class.to_s.colorize(color)
        #'♛'.colorize(color)
    end

end
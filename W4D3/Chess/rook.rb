require_relative "./piece.rb"
require_relative "./slideable.rb"


class Rook < Piece

    include Slideable

    def move_dirs
        horizontal_dirs
    end 

    def symbol
        '♜'.colorize(color)    
    end

    def inspect
        self.class.to_s.colorize(color)
        #'♛'.colorize(color)
    end

end
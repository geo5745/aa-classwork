require_relative "./piece.rb"
require_relative "./stepable.rb"


class King < Piece

    include Stepable

    def move_diffs
        king_moves 
    end

    def symbol
        '♛'.colorize(color)
    end

    def inspect
        self.class.to_s.colorize(color)
        #'♛'.colorize(color)
    end

end
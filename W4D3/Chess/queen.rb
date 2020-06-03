require_relative "./piece.rb"
require_relative "./slideable.rb"


class Queen < Piece

    include Slideable

    def symbol
        '♛'.colorize(color)
    end

    def inspect
        self.class.to_s.colorize(color)
        #'♛'.colorize(color)
    end

end
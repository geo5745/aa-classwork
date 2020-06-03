#require_relative "./board.rb"

class Piece 
    attr_reader :type, :color
    attr_accessor :pos, :board

    def initialize(color, board, pos)
        @color = color #Symbol
        @board = board #Board
        @pos = pos #Array
        board[pos] = self
        #@type = type
    end 

    def inspect
        "#{color}"
    end

    # def to_s 
    #     self.to_s
    # end 

    # def empty

    # end 
end




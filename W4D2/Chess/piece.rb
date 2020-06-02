
class Piece 
    attr_reader :type, :color
    attr_accessor :pos

    def initialize(color, board, pos, type)
        @color = color #Symbol
        @board = board #Board
        @pos = pos #Array
        board[pos] = self
        @type = type
    end 

    def inspect
        "#{type}-#{color}"
    end

    # def to_s 
    #     self.to_s
    # end 

    # def empty

    # end 
end




class Rook < Piece



end

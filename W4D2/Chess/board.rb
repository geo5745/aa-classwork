require_relative "./piece.rb"
require_relative "./bishop.rb"
require_relative "./king.rb"
require_relative "./knight.rb"
require_relative "./nullpiece.rb"
require_relative "./pawn.rb"
require_relative "./queen.rb"
require_relative "./rook.rb"

class Board 

    attr_reader :board
    attr_accessor :rows

    def initialize
        @rows = Array.new(8) { Array.new(8, nil) }
        #private 
        #@sentinel = Piece.new()
        sentinel = nil
    end 

    def move_piece(start_pos, end_pos)
        if self[start_pos].is_a?(NullPiece) # && not other players piece 
            raise "there is no piece at start_pos"
        elsif !self[end_pos].is_a?(NullPiece) # && !self[end_pos].color == same color
            raise "the piece cannot move to end_pos"
        else
            current_piece = self[start_pos]
            self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
            current_piece.pos = end_pos
        end 

    end 
    # p @rows[0][0] == Object: Rook

    def [](pos)
        x,y = pos
        @rows[x][y]
    end

    def []=(pos,val)
        x,y = pos
        @rows[x][y] = val
    end 

    def render
        @rows.each do |row|
            p row 
        end 
        p "-------------------------------------"
    end 

end 

# board = Board.new
# king = Piece.new("W",board,[0,0],"K")
# null = NullPiece.new(" ",board,[0,1]," ")

# board.render

# board.move_piece([0,0],[0,1])

# board.render

# board.move_piece([0,0],[0,1])
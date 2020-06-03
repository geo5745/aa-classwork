module Stepable

    #attr_reader :horizontal_dirs, diagonal_dirs

    KNIGHT_MOVES = [[1,2], [2,1], [-1,2], [2,-1],[-1,-2],[-2,-1],[1,-2],[-2,1]]
    KING_MOVES = [[1,1], [-1,1], [-1,-1], [1,-1], [1,0], [0,1], [-1,0], [0,-1]]

    def knight_moves
        KNIGHT_MOVES
    end
    
    def king_moves 
        KING_MOVES
    end

    def move_diffs
        knight_moves + king_moves
    end 

    def moves
        all_possible_moves = move_diffs
        total_moves = [] 
        
        all_possible_moves.each do |step| 
            current_pos = self.pos.dup
            current_pos[0] += step[0]
            current_pos[1] += step[1]
            next if current_pos[0] > 7 || current_pos[0] < 0 || current_pos[1] > 7 || current_pos[1] < 0 #off the board
            next if self.color == self.board[current_pos].color # same color piece                
            total_moves << current_pos.dup
        end 
        total_moves
    end 

end
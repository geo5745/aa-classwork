
module Slideable

    #attr_reader :horizontal_dirs, diagonal_dirs

    HORIZONTAL_DIRS = [[1,0], [0,1], [-1,0], [0,-1]]
    DIAGONAL_DIRS = [[1,1], [-1,1], [-1,-1], [1,-1]]

    def horizontal_dirs
        HORIZONTAL_DIRS
    end 

    def diagonal_dirs
        DIAGONAL_DIRS
    end 

    def move_dirs
        horizontal_dirs + diagonal_dirs
    end 

    def grow_unblocked_moves_in_dir(dir)
        total_moves = [] 

        current_pos = self.pos.dup
        
        stop_condition = false 
        until stop_condition
            current_pos[0] += dir[0]
            current_pos[1] += dir[1]
            if current_pos[0] > 7 || current_pos[0] < 0 || current_pos[1] > 7 || current_pos[1] < 0 #off the board
                stop_condition = true
                break
            elsif self.color == self.board[current_pos].color # same color piece
                stop_condition = true
                break
            elsif (self.color != self.board[current_pos].color) && (self.board[current_pos].color != nil) # checks if we took the enemy piece
                stop_condition = true
            end
            total_moves << current_pos.dup
        end
        total_moves
    end 

    def moves 
        all_possible_moves = []

        move_dirs.each do |dir|
            x, y = dir
            all_possible_moves += grow_unblocked_moves_in_dir([x, y])
        end 

        all_possible_moves
    end 

end


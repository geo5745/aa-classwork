require_relative "./piece.rb"
require 'singleton'

class NullPiece < Piece
    include Singleton
    attr_reader :color

    def initialize
        @color = nil
    end

    def symbol
        nil
    end

    def inspect
         "null".yellow
    end
end 
class Card
    attr_reader :value, :suite

    def initialize(suite, value)
        @value, @suite = value, suite
    end
end
# Rules
# Each player is dealt five cards.
# Players bet; each player may fold, see the current bet, or raise.
# In turn, each player can choose to discard up to three cards.
# They are dealt new cards from the deck to replace their old cards. After a round?
# Get to bet twice. 
# Players bet again.
# If any players do not fold, then players reveal their hands; strongest hand wins the pot.
# When a player discards a card it goes back to the deck

# Deck of 52 cards. If players get cards out of the deck the deck gets smaller. 
# 52 card object
# Once the player has the cards in hand we take it out of the deck so there are no duplicates.
# Total deck array/dictionary if we add up everyones remaining deck
# The hand cant have less than 2 cards. If the player tries to discard more it will raise an error


# Design
# Classes you will want:

# Card -
# Deck - array of cards 
# Request a TA Code review
# Hand
# The logic of calculating pair, three-of-a-kind, two-pair, etc. goes here.
# Logic of which hand beats which would go here.
# Player
# Each player has a hand, plus a pot
# Player has methods to ask the user:
# Which cards they wish to discard
# Whether they wish to fold, see, or raise.
# Game
# Holds the deck
# Keeps track of whose turn it is
# Keeps track of the amount in the pot.
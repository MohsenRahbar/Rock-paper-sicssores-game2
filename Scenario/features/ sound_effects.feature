Feature: Sound Effects

  Scenario: Winning a game
    Given the player wins a round
    When the result is "You win."
    Then the win sound should play

  Scenario: Losing a game
    Given the player loses a round
    When the result is "You lose."
    Then the lose sound should play

  Scenario: Tie game
    Given the round ends in a tie
    When the result is "You tie."
    Then the tie sound should play

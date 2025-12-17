Feature: Play Rock Paper Scissors

  Scenario: Player clicks Rock
    Given the game is loaded
    When the player clicks the "Rock" button
    Then the result should be displayed
    And the score should be updated

  Scenario: Player clicks Paper
    Given the game is loaded
    When the player clicks the "Paper" button
    Then the result should be displayed
    And the score should be updated

  Scenario: Player clicks Scissors
    Given the game is loaded
    When the player clicks the "Scissors" button
    Then the result should be displayed
    And the score should be updated

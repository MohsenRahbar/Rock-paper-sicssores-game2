Feature: Auto Play Mode

  Scenario: Start Auto Play
    Given the game is loaded
    When the player clicks the "Auto Play" button
    Then the game should automatically play moves every second
    And the Auto Play button text should change to "Stop"

  Scenario: Stop Auto Play
    Given Auto Play is running
    When the player clicks the "Stop" button
    Then Auto Play should stop
    And the button text should revert to "Auto Play"

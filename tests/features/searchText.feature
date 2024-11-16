# This is the Feature file of the Requirment - 2 & 3
Feature: Search Functionality validation

  Scenario Outline: To validate if the search results contains partial searched text only
    Given User is on the oranum home page
    When User searches the pshycics with "<word>" text
    Then User should be displayed with search results matching the partial searched text "<word>"

    Examples:
      | word |
      | Matt |
      # | Myst |
      # | Ann  |
      # | psy  |

  # Scenario Outline: To validate if the search results contains Full searched text only
  #   Given User is on the oranum home page
  #   When User searches the pshycics with "<word>" text
  #   Then User should be displayed with search results matching specific psychic only "<word>"

  #   Examples:
  #     | word         |
  #     | MattWarren   |
  #     | MysticMilena |
  #     | EternalFlame |
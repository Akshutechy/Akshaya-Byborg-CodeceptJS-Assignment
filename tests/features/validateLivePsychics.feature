# This is the Feature file of the Requirment - 1

# The Live badge could not be able to validate since it is not visible for all live pshychics

Feature: Live Psychics validation

  Scenario: To validate if the displaying live pshychics are unique
    Given User is on the oranum home page
    When User clicks on the Live Experts button under Session type
    Then User should be displayed with the unique Live Psychics
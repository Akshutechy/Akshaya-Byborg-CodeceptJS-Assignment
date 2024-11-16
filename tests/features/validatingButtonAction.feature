# This is the Feature file of the Requirment - 4

# This test cannot be verified for the given buttons because none of the buttons were present on the Live Psychic page.
# Only "Gift Inside" button is present, so we are verifying with this button

Feature: Button Action validation

  Scenario: To validate if clicking on Gift inside button opens the sign up overlay box
    Given User is on the oranum home page
    When User opens the live pshycic
    When User clicks on gift inside button
    Then User should be displayed with sign up overlay box

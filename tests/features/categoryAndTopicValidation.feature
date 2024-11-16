# This is the Feature file of the Requirment - 5

Feature: Category/Topic validation

  Scenario Outline: To validate if the displaying results are as per the selected category/topic
    Given User is on the oranum home page
    When User clicks on the "<categoryOrTopicName>" button
    Then User should be displayed with the selected "<categoryOrTopicName>"

    Examples: 
      | categoryOrTopicName  |
      | Astrology            |
      | Tarot                |
      | Clairvoyance         |
      | Dream interpretation |
      | Healing              |
      | Crystals             |
      | Mediumship           |
      | Crystal ball         |
      | Numerology           |
      | Runes                |
      | Palm reading         |
      | Energy work          |
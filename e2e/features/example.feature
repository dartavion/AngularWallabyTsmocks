@example @happy-flow @angular
Feature: Happy flow V3

  Background: Open Angular homepage
    Given I visit localhost

  @visitor @julie
  Scenario: As a visitor I want to add a formatted phone number
    Given I submit the phone number "5858651122"
    Then I see the formatted phone number "585-865-1122"
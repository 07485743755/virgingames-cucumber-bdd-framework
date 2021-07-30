Feature: Login Test
  As a user I want to login in to virgin game website

  @Smoke
  Scenario: User should navigate to login page successfully
    Given I am on virgin game home page
    When I click on Login Link
    Then I should navigate to login page successfully with title "Need an account?"

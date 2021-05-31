Feature: Look for posts
  As a user, I want to see all the posts on the home page.

  Scenario: User looks posts
    Given the user has navigated to Shahala home page
    Then the user visualizes all the posts correctly

  Scenario: User looks for a concrete post's comments
    Given the user has navigated to Shahala home page
    When the user navigates to the 1° post's comments page
    Then the user visualizes all the 1° post's comments correctly

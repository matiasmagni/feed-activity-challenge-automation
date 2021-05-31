Feature: Add comments
  As a user, I want to add comments to a post.

  Scenario: User looks for a concrete post's comments
    Given the user has navigated to Shahala home page
    When the user navigates to the 1° post's comments page
    And the user adds a new comment
      | Name    | Matias Magni            |
      | Email   | matias.magni@gmail.com  |
      | Comment | This is a test comment. |
    Then the user visualize the new added comment correctly

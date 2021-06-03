Feature: Add comments
  As a user, I want to add comments to a post.

  Scenario: User adds a new comment
    Given the user has navigated to Shahala home page
    When the user navigates to the 1° post's comments page
    And the user adds a new comment
      | Name    | Matias Magni            |
      | Email   | matias.magni@gmail.com  |
      | Comment | This is a test comment. |
    Then the user visualizes the new added comment correctly

  Scenario: User tries to add a new comment using an invalid email
    Given the user has navigated to Shahala home page
    When the user navigates to the 1° post's comments page
    And the user adds a new comment
      | Name    | Matias Magni            |
      | Email   | matias.magni@gmail      |
      | Comment | This is a test comment. |
    Then the user visualizes that the comment is not added

  Scenario: User tries to add a new comment with name field in blank
    Given the user has navigated to Shahala home page
    When the user navigates to the 1° post's comments page
    And the user adds a new comment
      | Name    |                         |
      | Email   | matias.magni@gmail      |
      | Comment | This is a test comment. |
    Then the user visualizes that the comment is not added

  Scenario: User tries to add a new comment with email field in blank
    Given the user has navigated to Shahala home page
    When the user navigates to the 1° post's comments page
    And the user adds a new comment
      | Name    | Matias Magni            |
      | Email   |                         |
      | Comment | This is a test comment. |
    Then the user visualizes that the comment is not added

  Scenario: User tries to add a new comment with comment field in blank
    Given the user has navigated to Shahala home page
    When the user navigates to the 1° post's comments page
    And the user adds a new comment
      | Name    | Matias Magni       |
      | Email   | matias.magni@gmail |
      | Comment |                    |
    Then the user visualizes that the comment is not added

  Scenario: User tries to add a new comment with all fields in blank
    Given the user has navigated to Shahala home page
    When the user navigates to the 1° post's comments page
    And the user adds a new comment
      | Name    |  |
      | Email   |  |
      | Comment |  |
    Then the user visualizes that the comment is not added

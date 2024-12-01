Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given the user is on the login screen
    When the user enters valid credentials
    And clicks on the login button
    Then the user should see the dashboard

  Scenario: Login with locked user
    Given the user is on the login screen
    When the user enters locked user credentials
    And clicks on the login button
    Then the "locked" error message should be displayed

  Scenario: Login with invalid credentials
    Given the user is on the login screen
    When the user enters invalid credentials
    And clicks on the login button
    Then the "no_match" error message should be displayed

  Scenario: Login without username and password
    Given the user is on the login screen
    When the user does not enter username and password
    And clicks on the login button
    Then the "no_user_details" error message should be displayed

  Scenario: Login without a password
    Given the user is on the login screen
    When the user enters only a username
    And clicks on the login button
    Then the "no_password" error message should be displayed

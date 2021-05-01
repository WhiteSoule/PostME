Feature: logging in
    The web page allows user to login if they have registered an account
    Background: 
        Given I am on the landing page

    Rule: login should only be possible for registered users

    Scenario: login of a registered user 
        And Tomer is registered 
        And I enters a username 
        And I enters a passwords
        When I clicks on submit button
        Then I should be on the dashboard page
        And I should see "Welcome Tomer"
    
    Scenario: login of not registered user 
        And Alex is not registered 
        And I enters a username 
        And I enters a passwords
        When I clicks on submit button
        Then I should be on the landing page
        And I should see "User not found"
    
    Rule: login should only be possible with the right credentials

    Scenario: login with right credentials
        And Tomer enters "nai@uni.lu" in email text field
        And Tomer enters "nai" in password text field
        When Tomer clicks submit
        Then Tomer is logged in
    
    Scenario: login with wrong email
        And Tomer enters "nul@uni.lu" in email text field
        And Tomer enters "nai" in password text field
        When Tomer clicks submit
        Then an error message is displayed
    
    Scenario: login with wrong password
        And Tomer enters "nai@uni.lu" in email text field
        And Tomer enters "123" in password text field
        When Tomer clicks submit
        Then an error message is displayed
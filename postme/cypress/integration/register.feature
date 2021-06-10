Feature: register

    Background: go on right page
        Given I am on the landing page
        And I go to Register page

    Scenario: register with valid credential

        And I enter valid credentials
        When I click on submit button
        Then I should land on login page

    Scenario: register with incorrect credential
        And I enter incorrect credentials
        When I click on submit button
        Then I should see an error message
Feature: logging in

    Background: go on right page
        Given I am on the landing page
        And I go to Login page

    Scenario: login with correct credential

        And I enter credentials
        When I click on submit button
        Then I should land on profile page

    Scenario: login with incorrect credential
        And I enter incorrect credentials
        When I click on submit button
        Then I should see an error message
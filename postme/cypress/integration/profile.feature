Feature: post on profile

    Background: go on right page
        Given I am on the landing page
        And I go to Profile page
    
    Scenario: post a text

        And I enter "Hello" as title and "World" as text
        When I click on post button
        Then I should see "Hello" and "World"
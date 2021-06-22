Feature: post on profile

    Background: go on right page
        Given I am on the Profile page
    
    Scenario: post a text

        When I enter "Hello" as title and "World" as text
        And I click on post button
        Then I should see "Hello" and "World"
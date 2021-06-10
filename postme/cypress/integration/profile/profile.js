const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

Given("I am on the landing page", () => {
    cy.visit("/");
    cy.contains("Welcome");
});

Given("I go to Profile page", () => {
    cy.get("[data-testid=profile-link]").click();
    cy.contains("Welcome to your Profile");
});

Given("I enter {string} as title and {string} as text", (title, text) => {
    cy.get("[data-testid=post_title]").type(title);
    cy.get("[data-testid=post_text]").type(text);
});

When("I click on post button", () => {
    cy.get("[data-testid=post]").click();
});

Then("I should see {string} and {string}", (title, text) => {
    cy.contains(title);
    cy.contains(text);
});

/* eslint-disable no-undef *//* eslint-disable prettier/prettier */

const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");

Given("I am on the Profile page", () => {
    cy.visit("/profile");
    cy.contains("Welcome to your Profile");
});

When("I enter {string} as title and {string} as text", (title, text) => {
    cy.get("[data-testid=post_title]").type(title);
    cy.get("[data-testid=post_text]").type(text);
});

And("I click on post button", () => {
    cy.get("[data-testid=post]").click();
});

Then("I should see {string} and {string}", (title, text) => {
    cy.contains(title);
    cy.contains(text);
});

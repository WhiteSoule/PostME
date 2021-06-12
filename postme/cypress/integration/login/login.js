const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

var valid;
Given("I am on the landing page", () => {
  cy.visit("/");
  cy.contains("Welcome");
});

Given("I go to Login page", () => {
  cy.get("[data-testid=login-link]").click();
});

Given("I enter credentials", () => {
  cy.get("[data-testid=login-email]").type("alex@mail.com");
  cy.get("[data-testid=login-password]").type("alex");
  valid = true;
});

Given("I enter incorrect credentials", () => {
  cy.get("[data-testid=login-email]").type("alek@mail.com");
  cy.get("[data-testid=login-password]").type("alex");
  valid = false;
});

When("I click on submit button", () => {
  cy.get("[data-testid=login-button]").click();
  cy.intercept("Post", "http://localhost:8000/login", (req) => {
    if (valid) {
      req.reply(201, {
        email: "alex@mail.com",
        password: "alex",
        data: {
          token: "123456789",
          msg: "logged in",
        },
        status: true,
      });
    } else {
      req.reply(200, { error: "wrong login!!" });
    }
  }).as("sendlogin");
  cy.wait("@sendlogin", requestTimeout = 20000);
});

Then("I should land on profile page", () => {
  cy.url().should("include", "/profile");
});

Then("I should see an error message", () => {
  cy.contains("wrong login!!");
});

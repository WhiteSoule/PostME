const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

var valid;
Given("I am on the landing page", () => {
  cy.visit("/");
  cy.contains("Welcome");
});

Given("I go to Register page", () => {
  cy.get("[data-testid=register-link]").click();
});

Given("I enter valid credentials", () => {
  cy.get("[data-testid=register-email]").type("alex@mail.com");
  cy.get("[data-testid=register-password]").type("alex");
  valid = true;
});

Given("I enter incorrect credentials", () => {
  cy.get("[data-testid=register-email]").type("alex@m.c");
  cy.get("[data-testid=register-password]").type("alex");
  valid = false;
});

When("I click on submit button", () => {
  cy.get("[data-testid=register-button]").click();
  cy.intercept("Post", "http://localhost:8000/register", (req) => {
    if (valid) {
      console.log("inside intercept valid!!");
      req.reply(201, {
        email: "alex@mail.com",
        password: "alex",
        data: {
          token: "8456",
          msg: "registered",
        },
      });
    } else {
      console.log("inside intercept not valid");
      req.reply(200, { error: "unvalid credentials!" });
    }
  }).as("sendregister");
  cy.wait("@sendregister", requestTimeout = 20000);
});

Then("I should land on login page", () => {
  cy.url().should("include", "/login");
});

Then("I should see an error message", () => {
  cy.contains("unvalid credentials");
});

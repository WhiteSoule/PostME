# PostME

You should have the application setup all done. 
We can now start with the BDD development.

# BDD

Behavioural Driven Development starts usually with a meeting between three people, The developer, the product owner and the tester.

The product owner describes the application by giving use cases. Those use cases will generate questions among the three people and therefore refine the requirements for the application. 

The Tester will write those use cases into Scenarios. 

Those scenarios will help to build our testing part such that the application will do exactly what the scenario describes.

We will for our application create those scenarios using cucumber.

## Scenario

Cucumber  uses the Gherkin language to describe the scenarios in a feature file.

The use cases will be structured into Given, When and Then keywords.

For example:

Given I register with email "name@company.com" and password "123"

When I click on submit button

Then I am registered

This scenario tells us that when a user wants to register, a email of the format given in the scenaro should be accepted. Of course this is a simplification of real world application.

From those requirement we now can develop a registration form to make this scenario possible.
We also see from the scenario what type ofweb application it will be. In this case a simplified register and login page that brings you to a profile and make you post some messages. As said before this project doesn'thave a backend, thus the testing and development is going to be a little bit different.

## install cucumber

Before we start we need to install Cucumber into our application.
For this you can run this in your terminal under the projects folder:

``
npm install --save-dev @cucumber/cucumber
#OR
yarn add --dev @cucumber/cucumber
``

## install cypress

For this project we also want to install cypress, which will help us to run testing steps along with cucumber.
For this you can run this in your terminal under the project folder:

``
npm install cypress
#OR
yarn add cypress --dev
``

### open cypress

Open cypress with: 

``
npx cypress open
#OR
yarn run cypress open
`` 

This will open cypress testing UI and will also add some important folders to configure cypress.

### cypress plugin

Since we want cypress and cucumber to work together we need to add some plugins for cypress. Like that it can run cucumber scenarios with cypress testing automation.

``
npm install --save-dev cypress-cucumber-preprocessor
``

Then you will need to add, to your plugins (cypress/plugins/index.js) :

``
const cucumber = require('cypress-cucumber-preprocessor').default
``

``
module.exports = (on, config) => {
on('file:preprocessor', cucumber())}
``

In the cypress.json file you will need to add this: 

``
{
  "testFiles": "**/*.feature"
}
``

And finally you will need to add this to the package.json file:

``
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
``

## create features

Let's start by creating a feature files in the cypress/integration folder.

In there  create a login.feature, register.feature and profile.feature file and for each a folder with the same name exluding the ".feature" part.

In those folders you can create a javascript file and name it how you want. Here we will give it the same name as the folder their are in and add the .js extension.

For now we just created those files but we still need to populate them with scenarios and step definitions. 

You can now checkout the branch 03-Features in which we will write our scenarios. 

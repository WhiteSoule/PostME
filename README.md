# PostME
You should have the application setup all done. 
We can now start with the BDD development.
# BDD
Behavioural Driven Development starts usually with a meeting between three people. 
The developer 
The product owner
And the Tester

The product owner describes the application by giving use cases. Those use cases will generate questions among the three people and therefore refine the requirements for the application. 
The Tester will then write those use cases into Scenarios. 
Those scenarios will make sure that the application will do exactly what the scenario describes.
We will for our application create those scenarios using cucumber.
## Scenario
Cucumber  uses the Gherkin language to describe the scenarios in a feature file. 
The use cases will be structured into Given, When and Then keywords. 
For example:
Given a user named Tomer registered with email "nai@uni.lu" and password "nai"
And Tomer enters his credential 
When Tomer clicks on submit button
Then Tomer is logged in

This scenario gives us the requirements that registered users can login when they enter their credentials and click on a submit button.
From those requirement we now can develop a sign-in form to make this scenario possible.

## install cucumber
before we start we need to install Cucumber into our application.
For this you can run this in your terminal under the projects folder:
``sh
npm install --save-dev @cucumber/cucumber
#OR
yarn add --dev @cucumber/cucumber
``
## create features

Let's start by creating a "test" folder in our application.

In there 

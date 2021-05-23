// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  //Github Username
  {
    type: "input",
    name: "userName",
    message: "What is your github Username?",
    validate: userNameInput => {
      if (userNameInput) {
        return true;
      } else {
        console.log("You need to enter a github username to continue!");
      }
    },
  },
  //Email Address
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("You need to enter an email address to continue!");
      }
    },
  },
  //Project's Name
  {
    type: "input",
    name: "title",
    message: "What is the name of the project?",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log("You need to enter a title for the project to continue!");
      }
    },
  },
  //Description
  {
    type: "input",
    name: "description",
    message:
      "Please give a detailed description about the purpose of your project",
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log(
          "You need to enter a short description about your project to continue!"
        );
      }
    },
  },
  //Usage
  {
    type: "input",
    name: "usage",
    message:
      "Please give a detailed explanation of how the project is intended to be used.",
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "You need to enter a short description about your project to continue!"
        );
      }
    },
  },
  //License
  {
    name: "license",
    message: "What kind of license should your project have?",
    type: "list",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log(
          "You need to select at least one of the available options to continue!"
        );
      }
    },
  },
  //Run Command
  {
    type: "input",
    name: "installation",
    message: "What command should be used to install the dependencies?",
    default: "npm i",
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log("You need to create a run command to continue!");
      }
    },
  },
  //What does the user need to know  about contributing the repo?
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
    validate: contributingInput => {
      if (contributingInput) {
        return true;
      } else {
        console.log(
          "You need to give information about contributing to continue!"
        );
      }
    },
  },
  //Testing
  {
    type: "input",
    name: "test",
    message: "What is the command to run all necessary tests.",
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log(
          "You need to give users information on how to run all necessary tests!"
        );
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
    console.log("README has been generated");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();

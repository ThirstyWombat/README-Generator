// create the question objects to be used for inquirer and place it into the questions array
//in the promise o

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
      },
      {
        type: "input",
        name: "usage",
        message: "What are the usage instructions for your project?",
      },
      {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines for your project?",
      },
      {
        type: "input",
        name: "test",
        message: "What are the test instructions for your project?",
      },
      {
        type: "list",
        name: "license",
        message: "Which license would you like to use for your project?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "input",
        name: "github",
        message: "What is your github username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
    ])
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      console.log(readmeContent);
      // const htmlPageContent = generateHTML(answers);
      // fs.writeFile('index.html', htmlPageContent, (err) =>
      //   err ? console.log(err) : console.log('Successfully created index.html!')
      // );
    });
}

// Function call to initialize app
init();

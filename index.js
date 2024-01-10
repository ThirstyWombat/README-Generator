const inquirer = require("inquirer");
const fs = require("fs");
const {
  generateMarkdown: generateMarkdown,
  renderLicenseBadge: renderLicenseBadge,
  renderLicenseLink: renderLicenseLink,
  renderLicenseSection: renderLicenseSection,
} = require("./utils/generateMarkdown.js");

const questions = [
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
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    const badge = renderLicenseBadge(answers.license);
    const license = renderLicenseSection(answers.license);

    const readmeContent = generateMarkdown(
      answers.title,
      badge,
      answers.description,
      answers.installation,
      answers.usage,
      license,
      answers.contribution,
      answers.test,
      answers.email,
      answers.github
    );

    fs.writeFile("README.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README!")
    );
  });
}

init();

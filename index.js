// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const createFile = require("./utils/writeFile");
const { writeFile } = require("./utils/writeFile");

// Array of questions
const questions = [
  // title
  {
    type: "input",
    message: "Enter a title for your project.",
    name: "title",
  },
  // description
  {
    type: "input",
    message: "Enter a brief description for your project.",
    name: "description",
  },
  // License
  {
    type: "list",
    message: "Select a license.",
    choices: [
      "Apache License 2.0",
      "GNU GPL 3.0",
      "MIT License",
      "BSD 3-Clause New or Revised License",
      "None",
    ],
    name: "license",
  },
  // Installation
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
  },
  // Tests
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
  // Usage
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  // Contributing
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
];

// Initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Use user feedback for... whatever!!
    const markdown = generateMarkdown(answers);
    writeFile("newReadme.md", markdown);
  });
}
// Function call to initialize app
init();

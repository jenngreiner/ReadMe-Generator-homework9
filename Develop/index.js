// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    // prompt user with questions
    {
        type: 'input',
        message: 'Enter a title for your project.',
        name: 'title',
    },
    // description
    {
        type: 'input',
        message: 'Enter a brief description for your project.',
        name: 'description',
    },
    // Installation
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
    },
    // Usage
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    // License
    {
        type: 'list',
        message: 'Select a license.',
        choices: ['APACHE 2.0', 'GPL 3.0', 'MIT', 'BSD 3', 'None'],
        name: 'license',
    },
    // Contributing
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
    // Tests
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile
}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
        .prompt(questions)
        .then(answers) => {
        const markdown = generateMarkdown(answers);
        log(markdown);
        writeToFile("Test.MD", data)
    }
}

// Function call to initialize app
init(question);

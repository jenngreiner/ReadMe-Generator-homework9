// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// Array of questions for user input
const questions = inquirer.prompt([
    // title
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
    // License
    {
        type: 'list',
        message: 'Select a license.',
        choices: ['APACHE 2.0', 'GPL 3.0', 'MIT', 'BSD 3', 'None'],
        name: 'license',
    },
    // Installation
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
    },
    // Tests
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },
    // Usage
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    // Contributing
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
]) .then((data) => {
            fs.writeFileSync('team.html', writeToFile(data));
        })
// Write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success!')
    });
}

// // Initialize app
// function init(questions) {
//     inquirer
//         .prompt(questions)
//         .then(answers => {
//             const markdown = generateMarkdown(answers);
//             writeToFile(`${data.title}`, answers)
//         }
//         )
// };

// // Function call to initialize app
// init(questions);

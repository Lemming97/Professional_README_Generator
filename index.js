// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Connect the generateMarkdown script  
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        pe: 'input',
        message: 'Please enter a one-sentence description of your project:',
        name: 'description',
    },
    {
        pe: 'input',
        message: 'Please tell us about your project:',
        name: 'about',
    },
    {
        pe: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        pe: 'input',
        name: 'usage',
        message: 'What will this project be used for?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Are there any contribution guidelines?',
    },
    {
        type: 'input',
        message: 'Please enter any testing protocols you used for this project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please select the license you used for this project:',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'Mozilla', 'Boost', ]
    },
    {
        type: 'input',
        message: 'Please enter your Github username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Are there any questions that need to be addressed?',
        name: 'questions',
    },

    {
        type: 'input',
        name: 'repo',
        message: 'What is the URL of the github repo?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'author',
        message: 'What is your name?',
    }

];



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            const filename = `${data.name //replace name with whatever content 
      .toLowerCase()
      .split(' ')
      .join('')}.json`;

            writeToFile(filename, data);
        });

};

// TODO: Create a function to write README file
// function writeToFile(filename, data) {
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
//         err ? console.log(err) : console.log('Success!')
//     );
// }

function writeToFile(filename, data) {
    fs.writeFile(`${response.title}.md`, generateMarkdown(response), err =>
        err ? console.log(err) : console.log('Success!')
    );
}


// Function call to initialize app
init();
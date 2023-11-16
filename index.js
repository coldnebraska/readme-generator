const inquirer = require("inquirer")
const fs = require("fs")

const questions = ["What is the title of your project:", "Please enter a description for your project:", "Please enter any installation instructions:", "Please provide information on how to use this app:", "Please list any contributors:", "Please provide testing instructions:"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, 

`## ${data.title}

## Project Description
${data.description}

## Table of Contents
[Installation](#installation)  
[Usage](#usage)  
[Credits](#credits)  
[License](#license)  
[Test Instructions](#test-instructions)
[Questions](#questions)  

## Installation
${data.installation}
## Usage
${data.usage}

## Credits
${data.contribution}

## License
${data.license}

## Test Instructions
${data.test}

## Questions
Github: https://github.com/${data.username}
`

    , (err) => err ? console.log(err) : console.log("Success"))
}

function init() {
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "description",
            message: questions[1]
        },
        {
            type: "input",
            name: "installation",
            message: questions[2]
        },
        {
            type: "input",
            name: "usage",
            message: questions[3]
        },
        {
            type: "input",
            name: "contribution",
            message: questions[4]
        },
        {
            type: "input",
            name: "test",
            message: questions[5]
        }
    ])
    .then((data) => {
        writeToFile("README.md", data)
    })
}

// Function call to initialize app
init();

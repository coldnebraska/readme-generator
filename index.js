const inquirer = require("inquirer")
const fs = require("fs")
let badge = ""
const questions = ["What is the title of your project:", "Please enter a description for your project:", "Please enter any installation instructions:", "Please provide information on how to use this app:", "Please list any contributors:", "Please provide testing instructions:", "What is your Github username?", "What is your email address?"];
const badgeChoices = ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU General Public License v2.0", "GNU Affero General Public License v3.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, 

`## ${data.title} ${badge} 

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
https://drive.google.com/file/d/1538UvSzyQljEkE6vxNLEm_AyliK5hCoT/view


## Credits
${data.contribution}

## License
${data.license}

## Test Instructions
${data.test}

## Questions
Github: https://github.com/${data.github}  
Email: ${data.email}
`

    , (err) => err ? console.log(err) : console.log("README successfully written"))
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
        },
        {
            type: "list",
            name: "license",
            message: "Please select a license:",
            choices: badgeChoices
        },
        {
            type: "input",
            name: "github",
            message: questions[6]
        },
        {
            type: "input",
            name: "email",
            message: questions[7]
        }
    ])
    .then((data) => {
        createLicenseBadge(data)
        writeToFile("README.md", data)
    })
}

function createLicenseBadge(data) {
    switch (data.license) {
        case badgeChoices[0]:
            badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break
        case badgeChoices[1]:
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            break
        case badgeChoices[2]:
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break
        case badgeChoices[3]:
            badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
            break
        case badgeChoices[4]:
            badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
            break
        case badgeChoices[5]:
            badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
            break
        case badgeChoices[6]:
            badge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
            break
        case badgeChoices[7]:
            badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
            break
        case badgeChoices[8]:
            badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
            break
        case badgeChoices[9]:
            badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
            break
        case badgeChoices[10]:
            badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
            break
        case badgeChoices[11]:
            badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            break
        case badgeChoices[12]:
            badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            break
    }
}

// Function call to initialize app
init();

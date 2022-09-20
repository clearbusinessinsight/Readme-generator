
const inquirer = require('inquirer');
const fs = require('fs');
// const utils = require("utils");
const generatereadme = ({ projectTitle, description, installation, usage, contribution, builtintest, license, username, email }) =>

`

# ${projectTitle} 👋

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contribution)
- [Tests](#builtintest)



## Project Description
${description}

## Installation Process
💾 ${installation}

## How is the project Used
${usage}

## License
![badge](https://img.shields.io/badge/license-${license}-brightgreen)
<br />
This application is covered by the ${license} license. 

## Contributors to the project
${contribution}

## Tests that are built in to the project
${builtintest}


Find me on GitHub: [${username}](https://github.com/${username})<br />
<br />
✉️ Email me with any questions: ${email}<br /><br />

`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: "What is your Project Title?",
    },
    {
      type: 'input',
      name: 'description',
      message: "Write a Description of your project:",
    },
    {
      type: 'input',
      name: 'installation',
      message: "Please describe the Installation process:",
    },
    {
      type: 'input',
      name: 'usage',
      message: "What is project used for?",
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
          "Apache",
          "Academic",
          "GNU",
          "ISC",
          "MIT",
          "Mozilla",
          "Open"
      ]
  },
    {
      type: 'input',
      name: 'contribution',
      message: "Who are the contributors of this project?",
    },
    {
      type: 'input',
      name: 'builtintest',
      message: "Are there test included?",
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: "
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: "
    }

  ])
  .then((answers) => {
    const readmePageContent = generatereadme(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


const inquirer = require('inquirer');
const fs = require('fs');
const generatereadme = ({ projectTitle, description, installation, usage, contribution, builtintest, license, username, email }) =>

`

# ${projectTitle} 👋

![badge](https://img.shields.io/badge/license-${license}-brightgreen)
<br />
This application is covered by the ${license} license. 


## Table of Contents
- [Description](#project-description)
- [Installation](#installation-instructions)
- [Usage](#usage-information)
- [License](#license)
- [Contributing](#contribution-guidelines)
- [Test](#test-instructions)
- [Questions](#questions)



## Project Description
${description}

## Installation Instructions
💾 ${installation}

## Usage Information
${usage}

## License
![badge](https://img.shields.io/badge/license-${license}-brightgreen)
<br />
This application is covered by the ${license} license. 

## Contribution Guidelines
${contribution}

## Test Instructions
${builtintest}

## Questions
Find me on GitHub: [${username}](https://github.com/${username})<br />
<br />
✉️ Email me with any questions: ${email}<br /><br />

`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: "What is the Project Title?",
    },
    {
      type: 'input',
      name: 'description',
      message: "Write a Description of your project:",
    },
    {
      type: 'input',
      name: 'installation',
      message: "Please describe the Installation instructions:",
    },
    {
      type: 'input',
      name: 'usage',
      message: "Please enter Usage Information:",
    },
    {
      type: 'input',
      name: 'contribution',
      message: "What are the contribution Guidelines?",
    },
    {
      type: 'input',
      name: 'builtintest',
      message: "Enter Test instructions.",
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

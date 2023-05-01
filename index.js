const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions:'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guidelines:'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:'
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('README file created successfully!');
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(data => {
      const { title, description, installation, usage, contribution, test, license, username, email } = data;
      const readmeTemplate = `# ${title}

${license !== 'None' ? `## License

This project is licensed under the ${license} license.` : ''}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contribution

${contribution}

## Tests

${test}

## Questions

For any questions, please contact ${username} at ${email}.`;

      writeToFile('README.md', readmeTemplate);
    });
}

// Function call to initialize app
init();






// // load into load modules this saves it as variable
// const inquirer = require("inquirer");
// const fs = require("fs");

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'What is your user name?',
//             name: 'username',
//         },
//         {
//             type: 'list',
//             message: 'What is your gender?',
//             name: 'gender',
//             choices: ["male", "female", "other"
//             ]
//         },
//         {
//             type: 'input',
//             message: 'How old are you:',
//             name: 'age',
//         },
//     ])
//     .then((response) =>{
//     // response.confirm === response.password
//     //   ? console.log('Success!')
//     //   : console.log('You forgot your password already?!')
//     console.log (response)
//     const text = `
    
//     # <Your-Project-Title>

//     ## Description
    
//     Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    
//     - What was your motivation?
//     - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
//     - What problem does it solve?
//     - What did you learn?
    
//     ## Table of Contents (Optional)
    
//     If your README is long, add a table of contents to make it easy for users to find what they need.
    
//     - [Installation](#installation)
//     - [Usage](#usage)
//     - [Credits](#credits)
//     - [License](#license)
    
//     ## Installation
    
//     What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    
//     ## Usage
    
//     Provide instructions and examples for use. Include screenshots as needed.
    
//     To add a screenshot, create an assets images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
//     md
//     ! [alt text](assets/images/screenshot . png)
    
//     ## Credits
    
//     List your collaborators, if any, with links to their GitHub profiles.
    
//     If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
//     If you followed tutorials, include links to those here as well.
    
//     ## License
    
//     The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
//     ---
    
//     🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
//     ## Badges
    
//     ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
//     Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
//     ## Features
    
//     If your project has a lot of features, list them here.
    
//     ## How to Contribute
    
//     If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
//     ## Tests
    
//     Go the extra mile and write tests for your application. Then provide examples on how to run them here.
    
   

//     ${response.username} is a ${response.age} year old ${response.gender} come into the er with ...
    
    
    
    
    
    
//     `
//     console.log (response.age)
//     console.log (text)
//    fs.writeFile ("README.md", text, "utf8", (err)=>{ console.error(err); })
//     });

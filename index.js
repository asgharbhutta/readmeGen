const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');
const generateBadge = require('./utils/generateMarkdown.js');

const { title } = require('process');

// prompts user for various data and returns the inquirer object as a return into promptUsers
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a project name!!!');
              return false;
            }
          }
        },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project:',
        default: "Default value was used",
      },
      {
        type: 'input',
        name: 'installations',
        message: 'What are the installation instructions?',
        default: "Default value was used",
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What will this be used for?',
        default: "Default value was used",
      },
      {
        type: 'input',
        name: 'contributes',
        message: 'Who is contributing to this project?',
        default: "Default value was used",
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        default: "henryford",
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        default: "henry.ford@gmail.com",
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What types of tests will be performed on this project?',
        default: "Default value was used",
      },
      {
        type: 'list',
        name: 'lic',
        message: 'Which license do you own?',
        choices: ['Free','Regular','Premium','Ultra']
      },
    //   {
    //     type: 'confirm',
    //     name: 'confirmAbout',
    //     message: 'Would you like to enter some information about yourself for an "About" section?',
    //     default: true
    //   },
    //   {
    //     type: 'input',
    //     name: 'about',
    //     message: 'Provide some information about yourself:',
    //     when: ({ confirmAbout }) => {
    //       if (confirmAbout) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     }
    //   },
    ]);
  };

  promptUser()
  .then(promptProject => {
    const pageHTML = generatePage(promptProject);

    fs.writeFile('./README.md', pageHTML, err => {
        if (err) throw new Error(err);

       console.log('Page created! Check out index.html in this directory to see it!');
     });
  });
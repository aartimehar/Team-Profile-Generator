// Node Modules
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const render = require('./src/page-template.js')

// Lib Modules
const Manager = require('./lib/Manager').default
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Array for answers and to the questions
const newstaffMemberData = []

// Arrray object questions asked in CLI to user
const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name'
    },
    {
      type: 'input',
      message: 'What is your id number?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email'
    },
    {
      type: 'input',
      message: 'What is your role?',
      name: 'role',
      choices: ['Enginer', 'Intern', 'Manager']
    }
  ])

  // console.log (answers) ;
}

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

// TODO: Write Code to gather information about the development team members, and render the HTML file.

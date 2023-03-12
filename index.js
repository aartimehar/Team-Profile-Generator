// TODO: Write Code to gather information about the development team members, and render the HTML file.
//Lib Modules
// Intern class is imported
const Engineer = require('./lib/Engineer.js')
// Intern class is imported
const Intern = require('./lib/Intern.js')
// Manager class is imported
const Manager = require('./lib/Manager.js')
//Node Modules
// required to ask questions to the user to generate the team profile
const inquirer = require('inquirer')
// fs required to write down the team profile
const fs = require('fs')
const path = require('path')
// page-template is required to create the markdown
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team-profile.html')
const render = require('./src/page-template.js')

// Is team complete is declared as boolean

// Validate input function which prevents the user to put empty strings for questions

const inputValidate = userInput => {
  if (userInput === '') {
    return 'Please type your answer before proceeding to the next question'
  } else {
    return true
  }
}

const newStaffMember = []

function init () {
  // The create manager function
  createManager()
}

function createManager () {
  // The array of manager questions to be asked
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is Manager's name?",
        name: 'managername',
        validate: inputValidate
      },
      {
        type: 'input',
        message: 'What is Employee ID?',
        name: 'managerID',
        validate: inputValidate
      },
      {
        type: 'input',
        message: 'What is your Office Number?',
        name: 'managerofficeNumber',
        validate: inputValidate
      },
      {
        type: 'input',
        message: 'Enter you work email?',
        name: 'managerEmail',
        validate: inputValidate
      }
    ])
    .then(ManagerAnswers => {
      const manager = new Manager(
        ManagerAnswers.managername,
        ManagerAnswers.managerID,
        ManagerAnswers.managerofficeNumber,
        ManagerAnswers.managerEmail
      )
      newStaffMember.push(manager)
    })
    .then(() => {
      createTeam()
    })
}

function createTeam () {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Please choose what type of employee you wish to Add?',
        name: 'typeEmployee',
        choices: [
          { name: 'Engineer', value: 'engineer', short: 'Engineer' },
          { name: 'Intern', value: 'intern', short: 'Intern' },
          { name: 'None', value: 'none', short: 'None' },
          { validate: inputValidate }
        ]
      }
    ])
    .then(async typeEmployee => {
      if (typeEmployee.typeEmployee === 'none') {
        generateTeam()
      } else if (typeEmployee.typeEmployee === 'engineer') {
        await createEngineer()
        createTeam()
      } else if (typeEmployee.typeEmployee === 'intern') {
        await createIntern()
        createTeam()
      } else {
        console.log('please choose a option')
      }
    })
}

async function createEngineer () {
  await inquirer
    .prompt([
      {
        type: 'input',
        message: "What is Engineer's name?",
        name: 'Engineername',
        validate: inputValidate
      },
      {
        type: 'input',
        message: 'What is Employee ID?',
        name: 'EngineerID',
        validate: inputValidate
      },
      {
        type: 'input',
        message: 'What is your email address??',
        name: 'EngineerEmail',
        validate: inputValidate
      },
      {
        type: 'input',
        message: 'Enter your Github Profile below:?',
        name: 'EngineerGithub',
        validate: inputValidate
      }
    ])
    .then(EngineerAnswers => {
      const engineer = new Engineer(
        EngineerAnswers.Engineername,
        EngineerAnswers.EngineerID,
        EngineerAnswers.EngineerEmail,
        EngineerAnswers.EngineerGithub
        )
      newStaffMember.push(engineer)
    })
}

//Create Intern Function

async function createIntern () {
  await inquirer
    .prompt([
      {
        type: 'input',
        message: "What is Intern's name?",
        name: 'Internname',
        validate: inputValidate
      },
      {
        type: 'input',
        message: 'What is Employee ID?',
        name: 'InternID',
        validate: inputValidate
      },
      {
        type: 'input',
        message: 'What is your email address??',
        name: 'InternEmail',
        validate: inputValidate
      },
      {
        type: 'input',
        message: 'Enter your School name below:?',
        name: 'InternSchool',
        validate: inputValidate
      }
    ])
    .then(InternAnswers => {
      const intern = new Intern(
        InternAnswers.Internname,
        InternAnswers.InternID,
        InternAnswers.InternEmail,
        InternAnswers.InternSchool
      )
      newStaffMember.push(intern)
    })
}

function generateTeam () {
  return fs.writeFileSync(outputPath, render(newStaffMember), 'utf-8')
}

init()

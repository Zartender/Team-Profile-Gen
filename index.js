//Grab all the classses , inquirer , pATH , generateHTML 
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const team = [];
const ID= [];

// initial quesitons
inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter your name',
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter your ID number',
        },
        {
            name: 'email',
            type: 'input',
            message: 'Provide your email',
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is your office number',
        },
        
    ])
    .then((answers) => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        idArray.push(answers.managerId)
        menu();
    });
// adding another team member
function menu() {
    inquirer
        .prompt([
            {
                name: 'team',
                type: 'list',
                choices: ['Engineer', 'Intern', 'Finish'],
                message: 'Would you like to add another team member?',
            },
        ])
        .then(userchoice => {
            console.log(userchoice);
            switch (userchoice.team) {
                case 'Engineer':
                    engineerQues();
                    break;
                case 'Intern':
                    internQues();
                default:
                    buildTeam(teamList);
            }

        })
}
// Adding an engineer
function engineerQues() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of your employee?',
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is the id number of your employee?',
            },
            {
                name: 'email',
                type: 'input',
                message: 'What is the email for your employee?',
            },
            {
                name: 'github',
                type: 'input',
                message: 'What is the GitHub username for your employee?',
            },
        ])
        .then((answers) => {
            console.log(answers)
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamList.push(engineer);
            idArray.push(answers.engineerId);
            menu();
        })
    }

function internQues() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of your employee?',
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is the id number of your employee?',
            },
            {
                name: 'email',
                type: 'input',
                message: 'What is the email for your employee?',
            },
            {
                name: 'education',
                type: 'input',
                message: 'Does the intern have a GED or highschool deploma, or a bachelors dehgree?',
            },
        ])
        .then((answers) => {
            console.log(answers)
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamList.push(intern);
            idArray.push(answers.internId);
            menu();
        })
}

function buildTeam(team) {
    console.log(team);
    const generateTemplate = template(team);
    fs.writeFile('index.html', generateTemplate, 'utf-8', (err) => err ?
        console.log(err) :
        console.log('Task Completed.'))
}                  
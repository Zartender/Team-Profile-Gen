//Grab all the classses , inquirer , pATH , generateHTML 
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
// template generater for cards
const generate = require('./templater');

const team = [];
const ID = [];



inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is your name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is your id number?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email?',
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is your office number?',
        },

    ])
    .then((answers) => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        ID.push(answers.managerId)
        menu();
    });

function menu() {
    inquirer.prompt([
        {
            name: 'team',
            type: 'list',
            choices: ['Engineer', 'Intern', 'Finished'],
            message: 'Would you like to add another team member?',
        },
    ])
        .then(userchoice => {
            console.log(userchoice);
            switch (userchoice.team) {
                case 'Manager':
                    questionsForManager();
                    break;
                case 'Engineer':
                    questionsForEngineer();
                    break;
                case 'Intern':
                    questionsForIntern();
                    break;
                default:
                    createTeam(team);
                    break;
            }

        })
}
// Adding a manager
function questionsForManager() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of your team manager?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the id number of your manager?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the email for your manager?',
        },
        {
            name: 'office',
            type: 'input',
            message: 'What is the office number of your manager?',
        },
        {
            name: 'task',
            type: 'list',
            message: 'What to accomplish?',
            choices: ['Add Engineer', 'Add Intern', 'Conclude Team Build']
        },

    ])
        .then((answers) => {
            console.log(answers)
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            team.push(manager);
            ID.push(answers.managerId)
            menu();
        })
}



// Adding an engineer
function questionsForEngineer() {
    inquirer.prompt([
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
            team.push(engineer);
            ID.push(answers.engineerId);
            menu();
        })
}



function questionsForIntern() {
    inquirer.prompt([

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
            const intern = new Intern(answers.name, answers.id, answers.email, answers.education);
            team.push(intern);
            ID.push(answers.internId);
            menu();
        })
}

function createTeam(team) {
    console.log("Create Team Msg All members: ", team);
    const templater = generate(team);
    fs.writeFile('index.html', templater, 'utf-8', (err) => err ?
        console.log(err) :
        console.log('Complete')
        )
        // process.exit(); 

}
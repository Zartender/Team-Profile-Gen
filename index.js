//Grab all the classses , inquirer , pATH , generateHTML 
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const team = [];
const ID = [];
// loads template file
const templater = require('./templater')


// questions prompted via inquirer
inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Provide your first and last name.',
            
        },
        {
            name: 'id',
            type: 'input',
            message: 'Provide your ID number.',
            
        },
        {
            name: 'email',
            type: 'input',
            message: 'Provide your email.',
            
        },
        {
            name: 'office',
            type: 'input',
            message: 'Please provide your office number.',
            
        },
       
    ])
.then((answers) => {
    console.log(answers);
    const newManager = new Manager(answers.name, answers.id, answers.email, answers.office);
    team.push(newManager);
    ID.push(answers.managerID);
});



//create an init() 
//welcome message 
//first ask questions related to Manager ex: Please enter {id, name , email and officenumber } 
// then question with type list : Choose 'Engineer' or Intern or 'None
//based on th option ask four question related to the class 
// but when the user selects NONE - generate HTML Page 
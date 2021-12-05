//Grab all the classses , inquirer , pATH , generateHTML 
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
constIntern = require("./lib/Intern");

//create an init() 
//welcome message 
//first ask questions related to Manager ex: Please enter {id, name , email and officenumber } 
// then question with type list : Choose 'Engineer' or Intern or 'None
//based on th option ask four question related to the class 
// but when the user selects NONE - generate HTML Page 
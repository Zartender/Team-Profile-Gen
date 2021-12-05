const Employee = require('./Employee'); 

class Intern extends Employee {
    
        constructor (name, id , email, education){
            super(name, id, email) ; 
            this.education = education;
        }
    
        getGithub() {
            return this.github;
        }
    
        //overridden to return 'Intern' instead of Employee
        getRole() {
            return  'Intern';
        }
}

module.exports = Intern; 
const Employee = require('./Employee'); 

class Manager extends Employee {

    constructor (name, id , email, office){
        super( name, id, email) ; 
        this.office = office;
     
    }


    // returns Manager instead of Employee
    getRole() {
        return  'Manager';
    }
    getOffice() {
        return this.office;

    }
}

module.exports = Manager; 
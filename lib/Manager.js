const Employee = require('./Employee'); 

class Manager extends Employee {

    constructor (name, id , email){
        super( name, id, email) ; 
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    // returns Manager instead of Employee
    getTitle() {
        return  'Manager';
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Manager; 
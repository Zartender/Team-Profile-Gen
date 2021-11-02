class Employee {
    //initializing the properties 
    constructor (name, id ,email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    //creating diff methods 
    getName() {
        return this.name ; 
    }

    getId() {
        return this.id ; 
    }

    getEmail() {
        return this.email ;
    }

    getRole() {
        return 'Employee' ;
    }


}

module.exports = Employee;

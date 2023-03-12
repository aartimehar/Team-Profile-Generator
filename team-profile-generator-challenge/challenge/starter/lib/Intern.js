// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Importing the Employee Parent class 
const Employee = require("./Employee");

// Intern class extends the employee parent class

class Intern extends Employee {
    // Constructor function will take name, email and id
    constructor({name, email, id, school}) {
        // the inherited properties are from the parent employee class which is name, email, id 
    super({name, email , id})

       // Access the user input the school 
    this.school= school;
       // Defines the role for the class as intern
       this.role= "Intern";
    }
    // Get school method retrieves the user inputted school name 
getSchool() {
    return this.school;
}
// Get role method retrieves the role for this instance 

getRole(){
    return this.role;
}
}

// The intern class is now exported to generate html and to index.js

module.exports=Intern;
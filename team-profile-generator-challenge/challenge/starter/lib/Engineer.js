// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Importing the employee parent class 
const Employee = require("./Employee");

// Engineer class extends the employee class 
class Engineer extends Employee{
    // Constructor function takes in name , email and github url 
    constructor({name , email , id , github}) {  
    // The inherited properties from the parent employee class are name , email , id 
super({name , email , id});
// Access the user -inputted github profile for this instance 
this.github= github;
// Defines the role as a Engineer 
this.role = Engineer;
    }
    // Get Github method on engineer returns the  inputted value of github profile URL 
getGithub() {
    return this.github;
}
// Get role returns the engineer role from the instance of a engineer class
getRole() {
    return this.role;
}
}
// The engineer class is exported to integrate with index.js and to generate HTML File 
module.exports = Engineer;
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Importing the parent Employee class
import Employee from './Employee'

// The Manager class extends the Parent employee class
class Manager extends Employee {
  // Constructor function takes in email, id, and name
  constructor ({ name, email, id, officeNumber }) {
    //inherited properties from employee class
    super({ name, email, id })
    // Access the user input value for the office number in this instance
    this.officeNumber = officeNumber

    // Defines the role for this class as manager
    this.role = 'Manager'
  }
  // Get the office number metod to retrieve the use inputted manager class
  getOfficeNumber () {
    return this.officeNumber
  }
  // Get the role method to retrieve in this instance of manager class
  getRole () {
    return this.role
  }
}
// The manager class is exported now to be accessed by index.js and generate html
export default Manager;

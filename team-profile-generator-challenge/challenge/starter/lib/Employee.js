// TODO: Write code to define and export the Employee class
class Employee {
  constructor (name , id , email) {
   this.name = name;
   this.id = id;
   this.email = email;
  }

  // Get name method to retrieve the user inputted name for employee class
getName() {
  return this.name;
}

// The get Id method retrieves the user input id for employee class
getID () {
  return this.id;
}

// The get email method retrieves the user inputted email for the employee class 
getEmail () {
  return this.email;
}

getRole () {
  return "Employee";
  }

}

// export default Employee;
export default Employee;

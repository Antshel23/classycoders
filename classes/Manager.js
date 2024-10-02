const Employee = require('./Employee');

class Manager extends Employee {
#employeesManaged

constructor(name,title,salary,isHired,department, employeesManaged = []) {
super(name,title,salary,isHired)
this.department = department
this.#employeesManaged = employeesManaged
}

getEmployeesManaged() {
    return this.#employeesManaged
}

setEmployeesManaged(employee) {
if (employee instanceof Employee) {
    this.#employeesManaged.push(employee)
}

}

    
}

module.exports = Manager
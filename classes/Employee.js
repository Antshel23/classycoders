class Employee {
#salary
#isHired
static allEmployees = []

constructor(name,title,salary,isHired = true) {
this.name = name
this.title = title
this.#salary = salary
this.#isHired = isHired

Employee.allEmployees.push(this)
}

getSalary() {
    return this.#salary
}

setSalary(amount) {
    this.#salary = amount
}

getStatus() {
    return this.#isHired
}

setStatus(command) {
    if (command === 'hire') {
        this.#isHired = true
    }
    else if (command === 'fire') {
        this.#isHired = false
    }
}

static getEmployees() {
    return Employee.allEmployees
}

static getTotalPayroll() {
    let sum = 0
    for (let i = 0; i < Employee.allEmployees.length; i++) {
        sum += Employee.allEmployees[i].getSalary()
    }
    return sum
}

}

module.exports = Employee

class Employee {
#salary
#isHired

constructor(name,title,salary,isHired) {
this.name = name
this.title = title
this.#salary = salary
this.#isHired = isHired
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
    
}

module.exports = Employee

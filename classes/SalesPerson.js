const Employee = require('./Employee');

class SalesPerson extends Employee {
    #totalSales

    constructor(name,title,salary,isHired, clients) {
        super(name,title,salary,isHired);
        this.#totalSales = 0;
        this.clients = clients
    }
    getSalesNumbers() {
        return this.#totalSales;
    }
    makeSale(amount) {
        this.#totalSales = amount
    }
}

module.exports = SalesPerson
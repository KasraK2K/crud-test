const Customer = require("./customer.model");

class CustomerRepository {
  find(aggregateData) {}

  findOne(aggregateData) {}

  create(createData) {
    const customer = new Customer(createData);
    return customer.save();
  }

  update(aggregateData, updateData) {}

  delete(aggregateData) {}
}

module.exports = new CustomerRepository();

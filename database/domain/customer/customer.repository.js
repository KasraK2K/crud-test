const Customer = require("./customer.model");

class CustomerRepository {
  find(aggregateData) {
    if (aggregateData.id) aggregateData._id = aggregateData.id;
    return Customer.find(aggregateData);
  }

  findOne(aggregateData) {
    if (aggregateData.id) aggregateData._id = aggregateData.id;
    return Customer.findOne(aggregateData);
  }

  create(createData) {
    const customer = new Customer(createData);
    return customer.save();
  }

  async update(aggregateData, updateData) {
    if (aggregateData.id) aggregateData._id = aggregateData.id;
    return await Customer.updateOne(aggregateData, updateData);
  }

  async delete(aggregateData) {
    if (aggregateData.id) aggregateData._id = aggregateData.id;
    return await Customer.deleteOne(aggregateData);
  }
}

module.exports = new CustomerRepository();

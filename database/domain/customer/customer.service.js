const grpc = require("grpc");
const customers = require("../../grpc/customer_pb");
const customerRepository = require("./customer.repository");
const emptyKeyRemover = require("../../common/utils/emptyKeyRemover");
const { customerGenerator } = require("./customer.helper");

async function findCustomer(call, callback) {
  const response = new customers.FindCustomerResponse();
  const aggregateCustomerData = call.request.getCustomer();
  let foundCustomers;
  try {
    foundCustomers = await customerRepository.find(
      emptyKeyRemover(aggregateCustomerData.toObject())
    );
  } catch (error) {
    return callback({ message: error.message });
  }
  let customersResponse;
  if (foundCustomers) {
    // add customers to response
    customersResponse = foundCustomers.map((customer) => {
      const customerResponse = customerGenerator(customer);
      return customerResponse;
    });
  }
  response.setCustomerList(customersResponse);
  callback(null, response);
}

async function findOneCustomer(call, callback) {
  const response = new customers.FindOneCustomerResponse();
  const aggregateCustomerData = call.request.getCustomer();
  let foundCustomer;
  try {
    foundCustomer = await customerRepository.findOne(
      emptyKeyRemover(aggregateCustomerData.toObject())
    );
    if (!foundCustomer)
      return callback({
        status: grpc.status.NOT_FOUND,
        message: "Customer not found",
      });
  } catch (error) {
    return callback({ message: error.message });
  }
  const customerResponse = customerGenerator(foundCustomer);
  response.setCustomer(customerResponse);
  callback(null, response);
}

async function createCustomer(call, callback) {
  const response = new customers.CreateCustomerResponse();
  let createCustomerData = call.request.getCustomer().toObject();
  let createdCustomer;
  try {
    createdCustomer = await customerRepository.create(createCustomerData);
  } catch (error) {
    if (error.code === 11000)
      return callback({
        status: grpc.status.ALREADY_EXISTS,
        message: `email already exist`,
      });
    else return callback({ message: error.message });
  }
  const customerResponse = customerGenerator(createdCustomer);
  response.setCustomer(customerResponse);
  callback(null, response);
}

async function updateCustomer(call, callback) {
  const response = new customers.UpdateCustomerResponse();
  let aggregateCustomerData = emptyKeyRemover(
    call.request.getCustomer().toObject()
  );
  let updateCustomerData = emptyKeyRemover(
    call.request.getUpdateCustomerData().toObject()
  );
  try {
    const updateResult = await customerRepository.update(
      aggregateCustomerData,
      updateCustomerData
    );
    if (!updateResult.modifiedCount)
      return callback({
        status: grpc.status.NOT_FOUND,
        message: "Customer not found",
      });
  } catch (error) {
    if (error.code === 11000)
      return callback({
        status: grpc.status.ALREADY_EXISTS,
        message: `email already exist`,
      });
    else return callback({ message: error.message });
  }
  response.setResult("Customer has been updated");
  callback(null, response);
}

async function deleteCustomer(call, callback) {
  const response = new customers.DeleteCustomerResponse();
  let aggregateCustomerData = emptyKeyRemover(
    call.request.getCustomer().toObject()
  );
  try {
    const deleteResult = await customerRepository.delete(aggregateCustomerData);
    if (!deleteResult.deletedCount)
      return callback({
        status: grpc.status.NOT_FOUND,
        message: "Customer not found",
      });
  } catch (error) {
    return callback({ message: error.message });
  }
  response.setResult("Customer has been removed");
  callback(null, response);
}

module.exports = {
  findCustomer,
  findOneCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};

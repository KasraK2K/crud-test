const customers = require("../../grpc/customer_pb");
const customerRepository = require("./customer.repository");

async function findCustomer(call, callback) {}

async function findOneCustomer(call, callback) {}

async function createCustomer(call, callback) {
  const response = new customers.CreateCustomerResponse();
  let createCustomerData = call.request.getCustomer().toObject();
  const createdCustomer = await customerRepository.create(createCustomerData);
  const customerResponse = new customers.Customer()
    .setId(createdCustomer.id)
    .setFirstName(createdCustomer.firstName)
    .setLastName(createdCustomer.lastName)
    .setDateOfBirth(new Date(createdCustomer.dateOfBirth))
    .setEmail(createdCustomer.email)
    .setPhoneNumber(createdCustomer.phoneNumber)
    .setBankAccountNumber(createdCustomer.bankAccountNumber);
  response.setCustomer(customerResponse);
  callback(null, response);
}

async function updateCustomer(call, callback) {}

async function deleteCustomer(call, callback) {}

module.exports = {
  createCustomer,
};

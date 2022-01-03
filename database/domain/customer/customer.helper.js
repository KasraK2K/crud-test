const customers = require("../../grpc/customer_pb");

function customerGenerator(customerData) {
  return new customers.Customer()
    .setId(customerData.id)
    .setFirstName(customerData.firstName)
    .setLastName(customerData.lastName)
    .setDateOfBirth(new Date(customerData.dateOfBirth).toISOString())
    .setEmail(customerData.email)
    .setPhoneNumber(customerData.phoneNumber)
    .setBankAccountNumber(customerData.bankAccountNumber);
}

function customerListGenerator(customerListData) {
  return customerListData.map((customer) => customerGenerator(customer));
}

module.exports = {
  customerGenerator,
  customerListGenerator,
};

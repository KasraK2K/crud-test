const customers = require("../../grpc/customer_pb");

function customerGenerator(customerData) {
  const {
    id,
    firstName,
    lastName,
    dateOfBirth,
    email,
    phoneNumber,
    bankAccountNumber,
  } = customerData;

  const customer = new customers.Customer();
  id && customer.setId(id);
  firstName && customer.setFirstName(firstName);
  lastName && customer.setLastName(lastName);
  dateOfBirth && customer.setDateOfBirth(new Date(dateOfBirth).toISOString());
  email && customer.setEmail(email);
  phoneNumber && customer.setPhoneNumber(phoneNumber);
  bankAccountNumber && customer.setBankAccountNumber(bankAccountNumber);
  return customer;
}

function customerListGenerator(customerListData) {
  return customerListData.map((customer) => customerGenerator(customer));
}

function customerGetter(response) {
  const result = Object.keys(response.getCustomer()).length
    ? response.getCustomer().toObject()
    : response.getCustomer();
  return { result };
}

function customerListGetter(response) {
  const result = response.getCustomerList().length
    ? response.getCustomerList().map((item) => item.toObject())
    : response.getCustomerList();
  return { result };
}

module.exports = {
  customerGetter,
  customerListGetter,
  customerGenerator,
  customerListGenerator,
};

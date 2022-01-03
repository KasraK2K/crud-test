const grpc = require("grpc");
const customers = require("../../grpc/customer_pb");
const service = require("../../grpc/customer_grpc_pb");
require("dotenv").config();

const client = new service.CustomerServiceClient(
  process.env.GRPC_SERVER_URL,
  grpc.credentials.createInsecure()
);

async function findCustomer(data) {
  const {
    id,
    firstName,
    lastName,
    dateOfBirth,
    email,
    phoneNumber,
    bankAccountNumber,
  } = data;

  const request = new customers.FindCustomerRequest();
  const customer = new customers.Customer();
  id && customer.setId(id);
  firstName && customer.setFirstName(firstName);
  lastName && customer.setLastName(lastName);
  dateOfBirth && customer.setDateOfBirth(new Date(dateOfBirth).toISOString());
  email && customer.setEmail(email);
  phoneNumber && customer.setPhoneNumber(phoneNumber);
  bankAccountNumber && customer.setBankAccountNumber(bankAccountNumber);

  request.setCustomer(customer);
  return { client, request };
}

async function findOneCustomer(data) {
  const {
    id,
    firstName,
    lastName,
    dateOfBirth,
    email,
    phoneNumber,
    bankAccountNumber,
  } = data;

  const request = new customers.FindOneCustomerRequest();
  const customer = new customers.Customer();
  id && customer.setId(id);
  firstName && customer.setFirstName(firstName);
  lastName && customer.setLastName(lastName);
  dateOfBirth && customer.setDateOfBirth(new Date(dateOfBirth).toISOString());
  email && customer.setEmail(email);
  phoneNumber && customer.setPhoneNumber(phoneNumber);
  bankAccountNumber && customer.setBankAccountNumber(bankAccountNumber);

  request.setCustomer(customer);
  return { client, request };
}

async function createCustomer(data) {
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    phoneNumber,
    bankAccountNumber,
  } = data;
  const request = new customers.CreateCustomerRequest();
  const customer = new customers.Customer();
  firstName && customer.setFirstName(firstName);
  lastName && customer.setLastName(lastName);
  dateOfBirth && customer.setDateOfBirth(new Date(dateOfBirth).toISOString());
  email && customer.setEmail(email);
  phoneNumber && customer.setPhoneNumber(phoneNumber);
  bankAccountNumber && customer.setBankAccountNumber(bankAccountNumber);

  const { valid, errors } = validator(schema.customer.create, data);
  if (!valid) return { hasError: true, errors };

  request.setCustomer(customer);
  return { client, request };
}

async function updateCustomer(data, updateDate) {
  const {
    id,
    firstName,
    lastName,
    dateOfBirth,
    email,
    phoneNumber,
    bankAccountNumber,
  } = data;
  const request = new customers.UpdateCustomerRequest();
  const customer = new customers.Customer();
  id && customer.setId(id);
  firstName && customer.setFirstName(firstName);
  lastName && customer.setLastName(lastName);
  dateOfBirth && customer.setDateOfBirth(new Date(dateOfBirth).toISOString());
  email && customer.setEmail(email);
  phoneNumber && customer.setPhoneNumber(phoneNumber);
  bankAccountNumber && customer.setBankAccountNumber(bankAccountNumber);

  const updateCustomerData = new customers.Customer();
  updateDate.firstName && updateCustomerData.setFirstName(updateDate.firstName);
  updateDate.lastName && updateCustomerData.setLastName(updateDate.lastName);
  updateDate.dateOfBirth &&
    updateCustomerData.setDateOfBirth(
      new Date(updateDate.dateOfBirth).toISOString()
    );
  updateDate.email && updateCustomerData.setEmail(updateDate.email);
  updateDate.phoneNumber &&
    updateCustomerData.setPhoneNumber(updateDate.phoneNumber);
  updateDate.bankAccountNumber &&
    updateCustomerData.setBankAccountNumber(updateDate.bankAccountNumber);

  request.setCustomer(customer);
  request.setUpdateCustomerData(updateCustomerData);

  return { client, request };
}

async function deleteCustomer(data) {
  const {
    id,
    firstName,
    lastName,
    dateOfBirth,
    email,
    phoneNumber,
    bankAccountNumber,
  } = data;
  const request = new customers.DeleteCustomerRequest();
  const customer = new customers.Customer();
  id && customer.setId(id);
  firstName && customer.setFirstName(firstName);
  lastName && customer.setLastName(lastName);
  dateOfBirth && customer.setDateOfBirth(new Date(dateOfBirth).toISOString());
  email && customer.setEmail(email);
  phoneNumber && customer.setPhoneNumber(phoneNumber);
  bankAccountNumber && customer.setBankAccountNumber(bankAccountNumber);

  request.setCustomer(customer);
  return { client, request };
}

module.exports = {
  findCustomer,
  findOneCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};

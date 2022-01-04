const grpc = require("grpc");
const customers = require("../../grpc/customer_pb");
const service = require("../../grpc/customer_grpc_pb");
const { customerGenerator } = require("./customer.helper");
require("dotenv").config();

const client = new service.CustomerServiceClient(
  process.env.GRPC_SERVER_URL,
  grpc.credentials.createInsecure()
);

async function findCustomer(data) {
  const request = new customers.FindCustomerRequest();
  const customer = customerGenerator(data);
  request.setCustomer(customer);
  return { client, request };
}

async function findOneCustomer(data) {
  const request = new customers.FindOneCustomerRequest();
  const customer = customerGenerator(data);
  request.setCustomer(customer);
  return { client, request };
}

async function createCustomer(data) {
  const request = new customers.CreateCustomerRequest();
  const customer = customerGenerator(data);
  request.setCustomer(customer);
  return { client, request };
}

async function updateCustomer(data, updateData) {
  const request = new customers.UpdateCustomerRequest();
  const customer = customerGenerator(data);
  const updateCustomerData = customerGenerator(updateData);
  request.setCustomer(customer);
  request.setUpdateCustomerData(updateCustomerData);
  return { client, request };
}

async function deleteCustomer(data) {
  const request = new customers.DeleteCustomerRequest();
  const customer = customerGenerator(data);
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

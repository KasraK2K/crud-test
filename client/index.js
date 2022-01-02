const grpc = require("grpc");
const customers = require("./grpc/customer_pb");
const service = require("./grpc/customer_grpc_pb");

const client = new service.CustomerServiceClient(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

function createCustomer() {
  const request = new customers.CreateCustomerRequest();
  const customer = new customers.Customer()
    .setFirstName("John")
    .setLastName("Doe")
    .setDateOfBirth(new Date("1986/03/01").toISOString())
    .setEmail("John@Doe1.com")
    .setPhoneNumber("49123456789")
    .setBankAccountNumber("SA4420000001234567891234");
  request.setCustomer(customer);
  client.createCustomer(request, (error, response) => {
    if (!error) console.log(response.getCustomer());
    else console.log(error.message);
  });
}

function main() {
  createCustomer();
}

main();

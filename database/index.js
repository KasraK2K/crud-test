const grpc = require("grpc");
require("./bootstrap.config");

/* --------------------------------- DOMAINS -------------------------------- */
const grpcCustomerService = require("./grpc/customer_grpc_pb");
const {
  findCustomer,
  findOneCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("./domain/customer/customer.service");

function main() {
  const server = new grpc.Server();
  server.addService(grpcCustomerService.CustomerServiceService, {
    findCustomer,
    findOneCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
  });
  server.bind(
    process.env.GRPC_SERVER_ADDRESS,
    grpc.ServerCredentials.createInsecure()
  );
  server.start();
  console.log(`Server running at ${process.env.GRPC_SERVER_PORT}`);
}

main();

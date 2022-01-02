const grpc = require("grpc");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/recruiter_db");
const grpcCustomerService = require("./grpc/customer_grpc_pb");
const { createCustomer } = require("./domain/customer/customer.service");

function main() {
  const server = new grpc.Server();
  server.addService(grpcCustomerService.CustomerServiceService, {
    createCustomer,
  });
  server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
  server.start();
  console.log("Server running at 50051");
}

main();

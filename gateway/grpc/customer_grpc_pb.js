// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var customer_pb = require('./customer_pb.js');

function serialize_customer_CreateCustomerRequest(arg) {
  if (!(arg instanceof customer_pb.CreateCustomerRequest)) {
    throw new Error('Expected argument of type customer.CreateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_CreateCustomerRequest(buffer_arg) {
  return customer_pb.CreateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_CreateCustomerResponse(arg) {
  if (!(arg instanceof customer_pb.CreateCustomerResponse)) {
    throw new Error('Expected argument of type customer.CreateCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_CreateCustomerResponse(buffer_arg) {
  return customer_pb.CreateCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_DeleteCustomerRequest(arg) {
  if (!(arg instanceof customer_pb.DeleteCustomerRequest)) {
    throw new Error('Expected argument of type customer.DeleteCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_DeleteCustomerRequest(buffer_arg) {
  return customer_pb.DeleteCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_DeleteCustomerResponse(arg) {
  if (!(arg instanceof customer_pb.DeleteCustomerResponse)) {
    throw new Error('Expected argument of type customer.DeleteCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_DeleteCustomerResponse(buffer_arg) {
  return customer_pb.DeleteCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_FindCustomerRequest(arg) {
  if (!(arg instanceof customer_pb.FindCustomerRequest)) {
    throw new Error('Expected argument of type customer.FindCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_FindCustomerRequest(buffer_arg) {
  return customer_pb.FindCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_FindCustomerResponse(arg) {
  if (!(arg instanceof customer_pb.FindCustomerResponse)) {
    throw new Error('Expected argument of type customer.FindCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_FindCustomerResponse(buffer_arg) {
  return customer_pb.FindCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_FindOneCustomerRequest(arg) {
  if (!(arg instanceof customer_pb.FindOneCustomerRequest)) {
    throw new Error('Expected argument of type customer.FindOneCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_FindOneCustomerRequest(buffer_arg) {
  return customer_pb.FindOneCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_FindOneCustomerResponse(arg) {
  if (!(arg instanceof customer_pb.FindOneCustomerResponse)) {
    throw new Error('Expected argument of type customer.FindOneCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_FindOneCustomerResponse(buffer_arg) {
  return customer_pb.FindOneCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_UpdateCustomerRequest(arg) {
  if (!(arg instanceof customer_pb.UpdateCustomerRequest)) {
    throw new Error('Expected argument of type customer.UpdateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_UpdateCustomerRequest(buffer_arg) {
  return customer_pb.UpdateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_UpdateCustomerResponse(arg) {
  if (!(arg instanceof customer_pb.UpdateCustomerResponse)) {
    throw new Error('Expected argument of type customer.UpdateCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_UpdateCustomerResponse(buffer_arg) {
  return customer_pb.UpdateCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomerServiceService = exports.CustomerServiceService = {
  // Unary APIs
findCustomer: {
    path: '/customer.CustomerService/FindCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customer_pb.FindCustomerRequest,
    responseType: customer_pb.FindCustomerResponse,
    requestSerialize: serialize_customer_FindCustomerRequest,
    requestDeserialize: deserialize_customer_FindCustomerRequest,
    responseSerialize: serialize_customer_FindCustomerResponse,
    responseDeserialize: deserialize_customer_FindCustomerResponse,
  },
  findOneCustomer: {
    path: '/customer.CustomerService/FindOneCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customer_pb.FindOneCustomerRequest,
    responseType: customer_pb.FindOneCustomerResponse,
    requestSerialize: serialize_customer_FindOneCustomerRequest,
    requestDeserialize: deserialize_customer_FindOneCustomerRequest,
    responseSerialize: serialize_customer_FindOneCustomerResponse,
    responseDeserialize: deserialize_customer_FindOneCustomerResponse,
  },
  createCustomer: {
    path: '/customer.CustomerService/CreateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customer_pb.CreateCustomerRequest,
    responseType: customer_pb.CreateCustomerResponse,
    requestSerialize: serialize_customer_CreateCustomerRequest,
    requestDeserialize: deserialize_customer_CreateCustomerRequest,
    responseSerialize: serialize_customer_CreateCustomerResponse,
    responseDeserialize: deserialize_customer_CreateCustomerResponse,
  },
  updateCustomer: {
    path: '/customer.CustomerService/UpdateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customer_pb.UpdateCustomerRequest,
    responseType: customer_pb.UpdateCustomerResponse,
    requestSerialize: serialize_customer_UpdateCustomerRequest,
    requestDeserialize: deserialize_customer_UpdateCustomerRequest,
    responseSerialize: serialize_customer_UpdateCustomerResponse,
    responseDeserialize: deserialize_customer_UpdateCustomerResponse,
  },
  deleteCustomer: {
    path: '/customer.CustomerService/DeleteCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customer_pb.DeleteCustomerRequest,
    responseType: customer_pb.DeleteCustomerResponse,
    requestSerialize: serialize_customer_DeleteCustomerRequest,
    requestDeserialize: deserialize_customer_DeleteCustomerRequest,
    responseSerialize: serialize_customer_DeleteCustomerResponse,
    responseDeserialize: deserialize_customer_DeleteCustomerResponse,
  },
};

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService);

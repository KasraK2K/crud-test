const customerSchema = {
  create: {
    type: "object",
    properties: {
      email: {
        type: "string",
        format: "email",
      },
      phoneNumber: {
        type: "string",
      },
      bankAccountNumber: {
        type: "string",
      },
    },
    required: ["email", "phoneNumber"],
    additionalProperties: true,
  },
};

module.exports = customerSchema;

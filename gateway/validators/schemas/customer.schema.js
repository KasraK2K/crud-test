const customerSchema = {
  general: {
    type: "object",
    properties: {
      email: {
        type: "string",
        format: "email",
      },
      phoneNumber: {
        type: "string",
      },
    },
    required: ["email", "phoneNumber"],
    additionalProperties: true,
  },
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
    },
    required: ["email", "phoneNumber"],
    additionalProperties: true,
  },
};

module.exports = customerSchema;

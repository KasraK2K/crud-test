const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: Date },
    phoneNumber: { type: String },
    email: { type: String, unique: true },
    bankAccountNumber: { type: String },
  },
  { strict: true }
);

module.exports = mongoose.model("Customer", customerSchema);

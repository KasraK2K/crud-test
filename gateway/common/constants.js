const Schema = require("../validators/schema");
const Validator = require("../validators/validator");
const phoneValidator = require("../validators/phone.validator");

const globalVariables = {
  validator: Validator,
  schema: Schema,
  phoneValidator,
};

module.exports = globalVariables;

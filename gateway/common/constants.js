const Schema = require("../validators/schema");
const Validator = require("../validators/validator");

const globalVariables = {
  validator: Validator,
  schema: Schema,
};

module.exports = globalVariables;

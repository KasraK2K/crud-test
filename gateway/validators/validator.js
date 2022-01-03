const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv();
addFormats(ajv);

const validator = (schema, data) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  return { valid, errors: validate.errors };
};

module.exports = validator;

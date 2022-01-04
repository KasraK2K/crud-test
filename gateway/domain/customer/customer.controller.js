const {
  findCustomer,
  findOneCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("./customer.service");
const { customerGetter, customerListGetter } = require("./customer.helper");

class CustomerController {
  async find(req, res) {
    const aggregateData = req.body;
    const { client, request } = await findCustomer(aggregateData);
    client.findCustomer(request, (error, response) => {
      if (!error) return res.json(customerListGetter(response));
      else return res.json(error);
    });
  }

  async findOne(req, res) {
    const aggregateData = req.body;
    const { client, request } = await findOneCustomer(aggregateData);
    client.findOneCustomer(request, (error, response) => {
      if (!error) return res.json(customerGetter(response));
      else return res.json(error);
    });
  }

  async create(req, res) {
    const createCustomerData = req.body;

    /* ---------------------------- Number Validation --------------------------- */
    const isValidPhoneNumber = phoneValidator(req.body.phoneNumber);
    if (!isValidPhoneNumber)
      return res.json({ errors: "Phone number is not a valid number" });
    /* ---------------------------- Schema Validation --------------------------- */
    const { valid, errors } = validator(
      schema.customer.create,
      createCustomerData
    );
    if (!valid) return res.json(errors);
    /* -------------------------------------------------------------------------- */

    const { client, request } = await createCustomer(createCustomerData);
    client.createCustomer(request, (error, response) => {
      if (!error) return res.json(customerGetter(response));
      else return res.json(error);
    });
  }

  async update(req, res) {
    const aggregateData = req.body.aggregate;

    /* ---------------------------- Number Validation --------------------------- */
    const phoneNumber = req.body.update.phoneNumber;
    if (phoneNumber) {
      const isValidPhoneNumber = phoneValidator(phoneNumber);
      if (!isValidPhoneNumber)
        return res.json({ errors: "Phone number is not a valid number" });
    }
    /* -------------------------------------------------------------------------- */

    const updateData = req.body.update;
    const { client, request } = await updateCustomer(aggregateData, updateData);
    client.updateCustomer(request, (error, response) => {
      if (!error) return res.json({ result: response.getResult() });
      else return res.json(error);
    });
  }

  async delete(req, res) {
    const aggregateData = req.body;
    const { client, request } = await deleteCustomer(aggregateData);
    client.deleteCustomer(request, (error, response) => {
      if (!error) return res.json({ result: response.getResult() });
      else return res.json(error);
    });
  }
}

module.exports = new CustomerController();

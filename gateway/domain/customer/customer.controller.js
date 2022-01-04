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
    const { client, request, hasError, errors } = await findCustomer(
      aggregateData
    );
    if (hasError) return res.json(errors);
    client.findCustomer(request, (error, response) => {
      if (!error) return res.json(customerListGetter(response));
      else return res.json(error);
    });
  }

  async findOne(req, res) {
    const aggregateData = req.body;
    const { client, request, hasError, errors } = await findOneCustomer(
      aggregateData
    );
    if (hasError) return res.json(errors);
    client.findOneCustomer(request, (error, response) => {
      if (!error) return res.json(customerGetter(response));
      else return res.json(error);
    });
  }

  async create(req, res) {
    const createCustomerData = req.body;
    const { client, request, hasError, errors } = await createCustomer(
      createCustomerData
    );
    if (hasError) return res.json(errors);
    client.createCustomer(request, (error, response) => {
      if (!error) return res.json(customerGetter(response));
      else return res.json(error);
    });
  }

  async update(req, res) {
    const aggregateData = req.body.aggregate;
    const updateData = req.body.update;
    const { client, request, hasError, errors } = await updateCustomer(
      aggregateData,
      updateData
    );
    if (hasError) return res.json(errors);
    client.updateCustomer(request, (error, response) => {
      if (!error) return res.json({ result: response.getResult() });
      else return res.json(error);
    });
  }

  async delete(req, res) {
    const aggregateData = req.body;
    const { client, request, hasError, errors } = await deleteCustomer(
      aggregateData
    );
    if (hasError) return res.json(errors);
    client.deleteCustomer(request, (error, response) => {
      if (!error) return res.json({ result: response.getResult() });
      else return res.json(error);
    });
  }
}

module.exports = new CustomerController();

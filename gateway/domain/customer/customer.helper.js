function customerGen(response) {
  const result = Object.keys(response.getCustomer()).length
    ? response.getCustomer().toObject()
    : response.getCustomer();
  return { result };
}

function customerListGen(response) {
  const result = response.getCustomerList().length
    ? response.getCustomerList().map((item) => item.toObject())
    : response.getCustomerList();
  return { result };
}

module.exports = {
  customerGen,
  customerListGen,
};

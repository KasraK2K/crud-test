import api from "./api";

const moduleName = "/customers";

export default {
  find(data) {
    return api.post(`${moduleName}/find`, data);
  },

  findOne(data) {
    return api.post(`${moduleName}/findOne`, data);
  },

  create(data) {
    return api.post(`${moduleName}/create`, data);
  },

  update(data) {
    return api.patch(`${moduleName}/update`, data);
  },

  delete(data) {
    return api.delete(`${moduleName}/delete`, {
      data,
    });
  },
};

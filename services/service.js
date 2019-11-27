const serviceAccessor = require("../data-access/service");
const { validateService } = require("../utils/validation");

const addService = async ({ title, price }) => {
  if (!validateService(title, price)) {
    return null;
  }
  const service = await serviceAccessor.addService({ title, price });
  return service;
};

const getAllServices = async () => await serviceAccessor.getAllServices();

const getService = async id => {
  const service = await serviceAccessor.getService(id);
  return service || null;
};

module.exports = {
  addService,
  getAllServices,
  getService
};

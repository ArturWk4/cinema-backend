const serviceAccessor = require("../data-access/service");

const addService = ({ title, price }) =>
  serviceAccessor.addService({ title, price });

const getAllServices = () => serviceAccessor.getAllServices();

const getService = id => serviceAccessor.getService(id);

module.exports = {
  addService,
  getAllServices,
  getService
};

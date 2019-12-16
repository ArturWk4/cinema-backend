const Service = require("../database/models/service");

const addService = async service => Service.create(service);
const getAllServices = async () => Service.findAll();
const getService = async id => Service.findByPk(id);

module.exports = {
  addService,
  getAllServices,
  getService
};

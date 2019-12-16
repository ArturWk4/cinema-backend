const Service = require("../database/models/service");

const addService = async service => Service.create(service);
const getAllServices = async () => Service.findAll();
const getService = async id => Service.findByPk(id);
const addServices = async services => Service.bulkCreate(services);
module.exports = {
  addService,
  getAllServices,
  getService
};

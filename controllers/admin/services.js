const HttpStatus = require("http-status-codes");
const serviceServices = require("../../services/service");
const { validateService } = require("../../utils/validation");

const addService = async (req, res) => {
  const { title, price } = req.body;
  if (!validateService(title, price)) {
    res.status(HttpStatus.BAD_REQUEST).end();
  } else {
    await serviceServices.addService(req.body);
    res.status(HttpStatus.CREATED).end();
  }
};

const getAllServices = async (req, res) => {
  const services = await serviceServices.getAllServices();
  res.status(HttpStatus.OK).json(services);
};

const getService = async (req, res) => {
  const { id } = req.params;
  const service = await serviceServices.getService(id);
  if (!service) {
    res.status(HttpStatus.NOT_FOUND).end();
  }
  res.status(HttpStatus.OK).json(service);
};
module.exports = {
  addService,
  getAllServices,
  getService
};

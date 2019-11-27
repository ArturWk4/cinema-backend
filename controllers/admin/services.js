const HttpStatus = require("http-status-codes");
const serviceServices = require("../../services/service");

const addService = async (req, res) => {
  const service = await serviceServices.addService(req.body);
  if (!service) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Wrong data to add new service!" });
  }
  res.status(HttpStatus.CREATED).end();
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

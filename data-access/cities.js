const City = require("../database/models/city");

const addCity = async city => City.create(city);
const getCity = async id => City.findByPk(id);
const getAllCities = async () => City.findAll();

module.exports = {
  addCity,
  getCity,
  getAllCities
};

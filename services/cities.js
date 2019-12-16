const cityAccessor = require("../data-access/cities");

const addCity = city => cityAccessor.addCity(city);

const getCity = id => cityAccessor.getCity(id);

const getAllCities = () => cityAccessor.getAllCities();

module.exports = {
  addCity,
  getCity,
  getAllCities
};

const cityAccessor = require("../data-access/cities");

const addCity = async city => cityAccessor.addCity(city);

const getCity = async id => {
  const city = await cityAccessor.getCity(id);
  return city || null;
};

const getAllCities = async () => cityAccessor.getAllCities();
module.exports = {
  addCity,
  getCity,
  getAllCities
};

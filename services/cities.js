const cityAccessor = require("../data-access/cities");

const addCity = async city => cityAccessor.addCity(city);

const getCity = async id => {
  const city = await cityAccessor.getCity(id);
  return city || null;
};

const getAllCities = async () => cityAccessor.getAllCities();

const deleteCity = async id => {
  const city = await cityAccessor.getCity(id);
  if (!city) {
    return null;
  } else {
    return await cityAccessor.deleteCity(id);
  }
};
module.exports = {
  addCity,
  getCity,
  getAllCities,
  deleteCity
};

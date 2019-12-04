const cityAccessor = require("../data-access/cities");
const cinemaAccessor = require("../data-access/cinemas");

const addCinema = async ({ title, city }) => {
  const cities = await cityAccessor.getAllCities();
  const cinemas = await cinemaAccessor.getAllCinemas();
  let existingCity = cities.find(cityItem => cityItem.name == city);
  let existingCinema = cinemas.find(cinemaItem => cinemaItem.title == title);

  if (!existingCity) {
    existingCity = await cityAccessor.addCity({ name: city });
  } else {
    if (existingCinema) {
      return null;
    }
  }

  const cinema = await cinemaAccessor.addCinema({ title });
  cinema.setCity(existingCity);
  return cinema;
};

const getCinema = id => cinemaAccessor.getCinema(id);

const getAllCinemas = () => cinemaAccessor.getAllCinemas();

module.exports = {
  addCinema,
  getCinema,
  getAllCinemas
};

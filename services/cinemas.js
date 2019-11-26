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

const getCinema = async id => {
  const cinema = await cinemaAccessor.getCinema(id);
  if (!cinema) {
    return null;
  } else {
    return cinema;
  }
};

const getAllCinemas = async () => await cinemaAccessor.getAllCinemas();

const deleteCinema = async id => {
  const cinema = await cinemaAccessor.getCinema(id);
  if (!cinema) {
    return null;
  } else {
    return await cinemaAccessor.deleteCinema(cinema);
  }
};

module.exports = {
  addCinema,
  getCinema,
  getAllCinemas,
  deleteCinema
};

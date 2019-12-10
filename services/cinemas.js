const cityAccessor = require("../data-access/cities");
const cinemaAccessor = require("../data-access/cinemas");

const addCinema = async ({ title, city }) => {
  const cityItem = await cityAccessor.getOrCreate(
    { name: city },
    { name: city }
  );
  const cinema = await cinemaAccessor.getOrCreate(
    { title, cityId: cityItem[0].id },
    { title, cityId: cityItem[0].id }
  );
  return cinema;
};

const getCinema = id => cinemaAccessor.getCinema(id);

const getAllCinemas = () => cinemaAccessor.getAllCinemas();

module.exports = {
  addCinema,
  getCinema,
  getAllCinemas
};

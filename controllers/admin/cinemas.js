const HttpStatus = require("http-status-codes");
const cinemaServices = require("../../services/cinemas");
const cityService = require("../../services/cities");

const addCinema = async (req, res) => {
  const { title, city } = req.body;
  const cities = await cityService.getAllCities();
  const cinemas = await cinemaServices.getAllCinemas();
  let existingCity = cities.find(cityItem => cityItem.name == city);
  let existingCinema = cinemas.find(cinemaItem => cinemaItem.title == title);

  if (!existingCity) {
    existingCity = await cityService.addCity({ name: city });
  } else {
    if (existingCinema) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: `Such cinema already exists in ${city}` });
    }
  }

  const cinema = await cinemaServices.addCinema({ title });
  cinema.setCity(existingCity);
  res.status(HttpStatus.CREATED).end();
};

const getAllCinemas = async (req, res) => {
  const cinemas = await cinemaServices.getAllCinemas();
  res.status(HttpStatus.OK).json(cinemas);
};

const getCinema = async (req, res) => {
  const { id } = req.params;
  const cinema = await cinemaServices.getCinema(id);
  if (!cinema) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    res.status(HttpStatus.OK).json(cinema);
  }
};

const deleteCinema = async (req, res) => {
  const { id } = req.params;
  const cinema = await cinemaServices.getCinema(id);
  if (!cinema) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    await cinemaServices.deleteCinema(cinema);
    res
      .status(HttpStatus.OK)
      .json({ message: `Successfuly removed cinema with id ${id}` });
  }
};

module.exports = {
  addCinema,
  getAllCinemas,
  getCinema,
  deleteCinema
};

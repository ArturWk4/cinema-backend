const HttpStatus = require("http-status-codes");
const cinemaService = require("../../services/cinemas");

const addCinema = async (req, res) => {
  const { title, city } = req.body;
  const cinema = await cinemaService.addCinema({ title, city });
  if (!cinema) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: `Such cinema already exists in ${city}` });
  } else {
    res.status(HttpStatus.CREATED).end();
  }
};

const getAllCinemas = async (req, res) => {
  const cinemas = await cinemaService.getAllCinemas();
  res.status(HttpStatus.OK).json(cinemas);
};

const getCinema = async (req, res) => {
  const { id } = req.params;
  const cinema = await cinemaService.getCinema(id);
  if (!cinema) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    res.status(HttpStatus.OK).json(cinema);
  }
};

const deleteCinema = async (req, res) => {
  const { id } = req.params;
  const deletedCinema = await cinemaService.deleteCinema(id);
  if (!deletedCinema) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    res.status(HttpStatus.OK).end();
  }
};

module.exports = {
  addCinema,
  getAllCinemas,
  getCinema,
  deleteCinema
};

const HttpStatus = require("http-status-codes");
const cinemaServices = require("../../services/cinemas");

const addCinema = async (req, res) => {
  const { title, city } = req.body;
  const cinema = await cinemaServices.addCinema({ title, city });

  if (!cinema) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: `Such cinema already exists in ${city}` });
  } else {
    res.status(HttpStatus.CREATED).end();
  }
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
  const deletedCinema = await cinemaServices.deleteCinema(id);
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

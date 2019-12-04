const HttpStatus = require("http-status-codes");
const seanceServices = require("../../services/seances");

const addSeance = async (req, res) => {
  const { startsAt, hallId, filmId } = req.body;
  const seance = await seanceServices.addSeance({ startsAt, hallId, filmId });
  if (!seance) {
    res.status(HttpStatus.BAD_REQUEST).end();
  } else {
    res.status(HttpStatus.CREATED).end();
  }
};

const getSeance = async (req, res) => {
  const { id } = req.params;
  const seance = await seanceServices.getSeance(id);
  if (!seance) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    res.status(HttpStatus.OK).json(seance);
  }
};

const getAllSeances = async (req, res) => {
  const seances = await seanceServices.getAllSeances();
  res.status(HttpStatus.OK).json(seances);
};

module.exports = {
  addSeance,
  getSeance,
  getAllSeances
};

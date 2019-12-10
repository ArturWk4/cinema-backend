const HttpStatus = require("http-status-codes");
const seanceService = require("../../services/seances");
const { validateSeance } = require("../../utils/validation");

const addSeance = async (req, res) => {
  const { startsAt, hallId, filmId } = req.body;
  if (!validateSeance(startsAt, hallId, filmId)) {
    res.status(HttpStatus.BAD_REQUEST).end();
  } else {
    await seanceService.addSeance({ startsAt, hallId, filmId });
    res.status(HttpStatus.CREATED).end();
  }
};

const getSeance = async (req, res) => {
  const { id } = req.params;
  const seance = await seanceService.getSeance(id);
  if (!seance) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    res.status(HttpStatus.OK).json(seance);
  }
};

const getAllSeances = async (req, res) => {
  const seances = await seanceService.getAllSeances();
  res.status(HttpStatus.OK).json(seances);
};

module.exports = {
  addSeance,
  getSeance,
  getAllSeances
};

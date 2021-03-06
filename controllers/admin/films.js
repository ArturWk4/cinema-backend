const HttpStatus = require("http-status-codes");
const filmsService = require("../../services/films");
const { validateFilm } = require("../../utils/validation");

const addFilm = async (req, res) => {
  const { title, description, duration, startsAt, endsAt } = req.body;
  if (!validateFilm(title, description, duration, startsAt, endsAt)) {
    res.status(HttpStatus.BAD_REQUEST).end();
  } else {
    await filmsService.addFilm({
      title,
      description,
      duration,
      startsAt,
      endsAt
    });
    res.status(HttpStatus.CREATED).end();
  }
};

const getFilm = async (req, res) => {
  const { id } = req.params;
  const film = await filmsService.getFilm(id);
  if (!film) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    res.status(HttpStatus.OK).json(film);
  }
};

const getAllFilms = async (req, res) => {
  const films = await filmsService.getAllFilms();
  res.status(HttpStatus.OK).json(films);
};

const deleteFilm = async (req, res) => {
  const { id } = req.params;
  const deletedFilm = await filmsService.deleteFilm(id);
  if (!deletedFilm) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    res.status(HttpStatus.OK).end();
  }
};

module.exports = {
  addFilm,
  getFilm,
  getAllFilms,
  deleteFilm
};

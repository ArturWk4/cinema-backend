const HttpStatus = require("http-status-codes");
const filmsService = require("../../services/films");

const addFilm = async (req, res) => {
  const film = await filmsService.addFilm(req.body);
  if (!film) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Wrong data to add film" });
  } else {
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
    res
      .status(HttpStatus.OK)
      .json({ message: `Successfully deleted film with id: ${id}` });
  }
};

module.exports = {
  addFilm,
  getFilm,
  getAllFilms,
  deleteFilm
};

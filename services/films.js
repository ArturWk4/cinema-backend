const filmsAccesser = require("../data-access/films");
const { validateFilm } = require("../utils/validation");

const addFilm = async ({ title, description, duration, startsAt, endsAt }) => {
  if (!validateFilm(title, description, duration, startsAt, endsAt)) {
    return null;
  } else {
    return await filmsAccesser.addFilm({
      title,
      description,
      duration,
      startsAt,
      endsAt
    });
  }
};

const getFilm = async id => {
  const film = await filmsAccesser.getFilm(id);
  if (!film) {
    return null;
  } else {
    return film;
  }
};

const getAllFilms = async () => await filmsAccesser.getAllFilms();

const deleteFilm = async id => {
  const film = await filmsAccesser.getFilm(id);
  if (!film) {
    return null;
  } else {
    return await filmsAccesser.deleteFilm(film);
  }
};

module.exports = {
  addFilm,
  getFilm,
  getAllFilms,
  deleteFilm
};

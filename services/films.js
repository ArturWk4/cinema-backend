const filmsAccessor = require("../data-access/films");
const { validateFilm } = require("../utils/validation");

const addFilm = async ({ title, description, duration, startsAt, endsAt }) => {
  if (!validateFilm(title, description, duration, startsAt, endsAt)) {
    return null;
  } else {
    return await filmsAccessor.addFilm({
      title,
      description,
      duration,
      startsAt,
      endsAt
    });
  }
};

const getFilm = async id => {
  const film = await filmsAccessor.getFilm(id);
  return film || null;
};

const getAllFilms = async () => await filmsAccessor.getAllFilms();

const deleteFilm = async id => {
  const film = await filmsAccessor.getFilm(id);
  if (!film) {
    return null;
  } else {
    return await filmsAccessor.deleteFilm(film);
  }
};

module.exports = {
  addFilm,
  getFilm,
  getAllFilms,
  deleteFilm
};

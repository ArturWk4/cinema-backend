const filmsAccessor = require("../data-access/films");

const addFilm = ({ title, description, duration, startsAt, endsAt }) =>
  filmsAccessor.addFilm({
    title,
    description,
    duration,
    startsAt,
    endsAt
  });

const getFilm = id => filmsAccessor.getFilm(id);

const getAllFilms = () => filmsAccessor.getAllFilms();

const deleteFilm = async id => {
  const film = await filmsAccessor.getFilm(id);
  if (!film) {
    return null;
  } else {
    return filmsAccessor.deleteFilm(film);
  }
};

module.exports = {
  addFilm,
  getFilm,
  getAllFilms,
  deleteFilm
};

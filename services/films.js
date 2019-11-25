const Film = require("../database/models/film");

const addFilm = async film => Film.create(film);
const getFilm = async id => Film.findByPk(id);
const getAllFilms = async () => Film.findAll();
const deleteFilm = async id => Film.findByPk(id).destroy();

module.exports = {
  addFilm,
  getFilm,
  getAllFilms,
  deleteFilm
};

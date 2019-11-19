const { Film } = require("../database/models");

const addFilm = async film => Film.create(film);
const getFilm = async id => Film.findByPk(id);
const getAllFilms = async () => Film.findAll();
const deleteFilm = async id => getFilm(id).destroy();

module.exports = {
  addFilm,
  getFilm,
  getAllFilms,
  deleteFilm
};


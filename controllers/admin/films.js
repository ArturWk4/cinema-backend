const HttpStatus = require("http-status-codes");

const filmsService = require("../../services/films");

const addFilm = async (req, res) => {
  const { title, description, startsAt, endsAt } = req.body;
};

const getFilm = async (req, res) => {};
const getAllFilms = async (req, res) => {};
const deleteFilm = async (req, res) => {};

module.exports = {
  addFilm,
  getFilm,
  getAllFilms,
  deleteFilm
};

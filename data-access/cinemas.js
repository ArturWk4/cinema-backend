const Cinema = require("../database/models/cinema");

const addCinema = async cinema => Cinema.create(cinema);
const getCinema = async id => Cinema.findByPk(id);
const getAllCinemas = async () => Cinema.findAll();
const deleteCinema = async cinema => cinema.destroy();

module.exports = {
  addCinema,
  getCinema,
  getAllCinemas,
  deleteCinema
};
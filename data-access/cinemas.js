const Cinema = require("../database/models/cinema");

const addCinema = async cinema => Cinema.create(cinema);
const getCinema = async id => Cinema.findByPk(id);
const getAllCinemas = async () => Cinema.findAll();
const getOrCreate = async (where, defaults) =>
  Cinema.findOrCreate({ where, defaults });

module.exports = {
  addCinema,
  getCinema,
  getAllCinemas,
  getOrCreate
};

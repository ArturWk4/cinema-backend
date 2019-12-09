const Hall = require("../database/models/hall");

const addHall = async hall => Hall.create(hall);
const getAllHalls = async () => Hall.findAll();
const getHall = async id => Hall.findByPk(id);
const getOrCreate = async (where, defaults) =>
  Hall.findOrCreate({ where, defaults });

module.exports = {
  addHall,
  getAllHalls,
  getHall,
  getOrCreate
};

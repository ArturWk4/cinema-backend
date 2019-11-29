const Hall = require("../database/models/hall");

const addHall = async hall => Hall.create(hall);
const getAllHalls = async () => Hall.findAll();
const getHall = async id => Hall.findByPk(id);

module.exports = {
  addHall,
  getAllHalls,
  getHall
};

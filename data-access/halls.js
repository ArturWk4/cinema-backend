const Hall = require("../database/models/hall");

const addHall = async hall => Hall.create(hall);
const getAllHalls = async () => Hall.findAll();
const getHall = async id => Hall.findByPk(id);
const getHallWhere = async where => Hall.findOne({ where });

module.exports = {
  addHall,
  getAllHalls,
  getHall,
  getHallWhere
};

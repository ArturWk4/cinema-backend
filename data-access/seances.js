const Seance = require("../database/models/seance");

const addSeance = async seance => Seance.create(seance);
const getAllSeances = async () => Seance.findAll();
const getSeance = async id => Seance.findByPk(id);

module.exports = {
  addSeance,
  getAllSeances,
  getSeance
};

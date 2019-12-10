const seanceAccessor = require("../data-access/seances");

const addSeance = ({ startsAt, hallId, filmId }) =>
  seanceAccessor.addSeance({ startsAt, hallId, filmId });

const getSeance = id => seanceAccessor.getSeance(id);

const getAllSeances = () => seanceAccessor.getAllSeances();

module.exports = {
  addSeance,
  getSeance,
  getAllSeances
};

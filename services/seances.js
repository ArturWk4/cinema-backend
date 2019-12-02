const seanceAccessor = require("../data-access/seances");
const { validateSeance } = require("../utils/validation");

const addSeance = async ({ startsAt, hallId, filmId }) => {
  if (!validateSeance(startsAt, hallId, filmId)) {
    return null;
  } else {
    return await seanceAccessor.addSeance({ startsAt, hallId, filmId });
  }
};

const getSeance = async id => {
  const seance = await seanceAccessor.getSeance(id);
  return seance || null;
};

const getAllSeances = async () => await seanceAccessor.getAllSeances();

module.exports = {
  addSeance,
  getSeance,
  getAllSeances
};

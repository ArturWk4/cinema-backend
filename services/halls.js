const hallsAccessor = require("../data-access/halls");

const addHall = ({ title, cinemaId }) =>
  hallsAccessor.addHall({ title, cinemaId });

const getHall = id => hallsAccessor.getHall(id);

const getAllHalls = () => hallsAccessor.getAllHalls();

module.exports = {
  addHall,
  getHall,
  getAllHalls
};

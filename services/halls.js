const hallsAccessor = require("../data-access/halls");
const { validateHall } = require("../utils/validation");

const addHall = async ({ title, cinemaId }) => {
  if (!validateHall(title, cinemaId)) {
    return null;
  }
  return await hallsAccessor.addHall({ title, cinemaId });
};

const getHall = async id => {
  const hall = await hallsAccessor.getHall(id);
  return hall || null;
};

const getAllHalls = async () => await hallsAccessor.getAllHalls();

module.exports = {
  addHall,
  getHall,
  getAllHalls
};

const seatTypeAccessor = require("../data-access/seatTypes");
const { validateSeatType } = require("../utils/validation");

const addSeatType = async ({ title, cost }) => {
  if (!validateSeatType(title, cost)) {
    return null;
  }
  return await seatTypeAccessor.addSeatType({ title, cost });
};

const getAllSeatTypes = async () => seatTypeAccessor.getAllSeatTypes();

const getSeatType = async id => {
  const seatType = await seatTypeAccessor.getSeatType(id);
  return seatType || null;
};

module.exports = {
  addSeatType,
  getAllSeatTypes,
  getSeatType
};

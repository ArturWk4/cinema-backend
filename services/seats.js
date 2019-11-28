const seatAccessor = require("../data-access/seats");
const { validateSeat } = require("../utils/validation");

const addSeat = async ({ seatTypeId, xPos, yPos }) => {
  if (!validateSeat(seatTypeId, xPos, yPos)) {
    return null;
  }
  return await seatAccessor.addSeat({ seatTypeId, xPos, yPos });
};

const getAllSeats = async () => await seatAccessor.getAllSeats();

const getSeat = async id => {
  const seat = await seatAccessor.getSeat(id);
  return seat || null;
};

module.exports = {
  addSeat,
  getAllSeats,
  getSeat
};

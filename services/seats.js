const seatAccessor = require("../data-access/seats");
const hallAccessor = require("../data-access/halls");

const addSeat = async ({ seatTypeId, xPos, yPos, hallId }) => {
  const hall = await hallAccessor.getHall(hallId);
  if(!hall) {
    return null;
  }
  const seat = await seatAccessor.getOrCreate(
    { xPos, yPos },
    { seatTypeId, xPos, yPos, hallId }
  );
  return seat;
};

const getAllSeats = () => seatAccessor.getAllSeats();

const getSeat = id => seatAccessor.getSeat(id);

module.exports = {
  addSeat,
  getAllSeats,
  getSeat
};

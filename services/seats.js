const seatAccessor = require("../data-access/seats");
const hallAccessor = require("../data-access/halls");

const addSeat = async ({ seatTypeId, xPos, yPos, hallId }) => {
  const hall = await hallAccessor.getHall(hallId);
  if (!hall) {
    return null;
  }
  let seat = await seatAccessor.getSeatWhere({ xPos, yPos });
  if (seat) {
    return null;
  } else {
    seat = await seatAccessor.addSeat({ seatTypeId, xPos, yPos, hallId });
  }
  return seat;
};

const getAllSeats = () => seatAccessor.getAllSeats();

const getSeat = id => seatAccessor.getSeat(id);

const addSeats = seats => seatAccessor.addSeats(seats);

module.exports = {
  addSeat,
  getAllSeats,
  getSeat,
  addSeats
};

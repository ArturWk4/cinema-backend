const seatAccessor = require("../data-access/seats");

const addSeat = ({ seatTypeId, xPos, yPos }) =>
  seatAccessor.addSeat({ seatTypeId, xPos, yPos });

const getAllSeats = () => seatAccessor.getAllSeats();

const getSeat = id => seatAccessor.getSeat(id);

module.exports = {
  addSeat,
  getAllSeats,
  getSeat
};

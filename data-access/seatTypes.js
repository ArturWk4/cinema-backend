const SeatType = require("../database/models/seatType");

const addSeatType = async seatType => SeatType.create(seatType);
const getAllSeatTypes = async () => SeatType.findAll();
const getSeatType = async id => SeatType.findByPk(id);

module.exports = {
  addSeatType,
  getAllSeatTypes,
  getSeatType
};

const Seat = require("../database/models/seat");

const addSeat = async seat => Seat.create(seat);
const getAllSeat = async () => Seat.findAll();
const getSeat = async id => Seat.findByPk(id);

module.exports = {
  addSeat,
  getAllSeat,
  getSeat
};

const Seat = require("../database/models/seat");

const addSeat = async seat => Seat.create(seat);
const getAllSeats = async () => Seat.findAll();
const getSeat = async id => Seat.findByPk(id);
const getSeatWhere = async where => Seat.findOne({ where });
const addSeats = async seats => Seat.bulkCreate(seats);

module.exports = {
  addSeat,
  getAllSeats,
  getSeat,
  getSeatWhere,
  addSeats
};

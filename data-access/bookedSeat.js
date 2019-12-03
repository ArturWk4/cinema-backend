const BookedSeat = require("../database/models/bookedSeat");

const getBookedSeatWhere = async seat => BookedSeat.findOne({ where: seat });
const bookSeat = async book => BookedSeat.create(book);

module.exports = {
  getBookedSeatWhere,
  bookSeat
};

const BookedSeat = require("../database/models/bookedSeat");

const getBookedSeatWhere = async where => BookedSeat.findOne({ where });
const bookSeat = async book => BookedSeat.create(book);
const deleteBook = async book => book.destroy();

module.exports = {
  getBookedSeatWhere,
  bookSeat,
  deleteBook
};

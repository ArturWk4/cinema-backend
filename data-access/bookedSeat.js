const BookedSeat = require("../database/models/bookedSeat");

const getBookedSeat = async id => BookedSeat.findByPk(id);
const bookSeat = async book => BookedSeat.create(book);
const deleteBook = async book => book.destroy();

module.exports = {
  getBookedSeat,
  bookSeat,
  deleteBook
};

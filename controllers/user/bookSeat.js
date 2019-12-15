const HttpStatus = require("http-status-codes");
const bookSeatService = require("../../services/bookSeats");
const { validateBook } = require("../../utils/validation");

const bookSeat = async (req, res) => {
  const { seatId, userId, seanceId } = req.body;
  if (validateBook(seatId, userId, seanceId)) {
    const book = await bookSeatService.bookSeat({ seatId, userId, seanceId });
    if (book) {
      res.status(HttpStatus.CREATED).end();
    }
  }
  res.status(HttpStatus.BAD_REQUEST).end();
};

const getBookedSeat = async (req, res) => {
  const { seatId, seanceId, userId } = req.body;
  if (validateBook(seatId, userId, seanceId)) {
    const book = await bookSeatService.getBookedSeat({
      seatId,
      seanceId,
      userId
    });
    if (book) {
      res.status(HttpStatus.OK).json(book);
    }
    res.status(HttpStatus.NOT_FOUND).end();
  }
  res.status(HttpStatus.BAD_REQUEST).end();
};

const deleteBook = async (req, res) => {
  const { seatId, seanceId, userId } = req.body;
  const deletedBook = await bookSeatService.deleteBook({
    seatId,
    seanceId,
    userId
  });
  if (deletedBook) {
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.BAD_REQUEST).end();
  }
};

module.exports = {
  bookSeat,
  getBookedSeat,
  deleteBook
};

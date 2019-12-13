const HttpStatus = require("http-status-codes");
const bookSeatService = require("../../services/bookSeats");

const bookSeat = async (req, res) => {
  const { seatId, userId, seanceId } = req.body;
  const book = await bookSeatService.bookSeat({ seatId, userId, seanceId });
  res.status(HttpStatus.CREATED).end();
};

module.exports = {
  bookSeat
};

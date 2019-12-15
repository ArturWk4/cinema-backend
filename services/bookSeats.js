const bookSeatAccessor = require("../data-access/bookedSeat");
const { isBookExpired, setExpiresSqlDate } = require("../utils/helpers");

const bookSeat = async ({ seatId, userId, seanceId }) => {
  let bookedSeat = await bookSeatAccessor.getBookedSeatWhere({
    seanceId,
    seatId,
    userId
  });

  if (bookedSeat) {
    if (isBookExpired(bookedSeat.dataValues.expires)) {
      bookSeatAccessor.deleteBook(bookedSeat);
    } else {
      return null;
    }
  }

  bookedSeat = await bookSeatAccessor.bookSeat({
    seatId,
    userId,
    seanceId,
    expires: setExpiresSqlDate(15)
  });

  return bookedSeat;
};

const getBookedSeat = async ({ seatId, seanceId, userId }) => {
  const bookedSeat = await bookSeatAccessor.getBookedSeatWhere({
    seatId,
    seanceId,
    userId
  });
  if (bookedSeat && isBookExpired(bookedSeat.dataValues.expires)) {
    bookSeatAccessor.deleteBook(bookedSeat);
  }
  return bookedSeat;
};

const deleteBook = async ({ seatId, seanceId, userId }) => {
  const bookedSeat = await bookSeatAccessor.getBookedSeatWhere({
    seanceId,
    seatId,
    userId
  });
  if (bookedSeat) {
    return await bookSeatAccessor.deleteBook(bookedSeat);
  } else {
    return null;
  }
};

module.exports = {
  bookSeat,
  getBookedSeat,
  deleteBook
};

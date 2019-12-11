const bookSeatAccessor = require("../data-access/bookedSeat");

const bookSeat = async ({ seatId, userId, seanceId }) => {
  let bookedSeat = await bookSeatAccessor.getBookedSeatWhere({
    seatId,
    isTaken: true
  });
};

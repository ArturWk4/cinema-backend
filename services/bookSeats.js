const bookSeatAccessor = require("../data-access/bookedSeat");

const bookSeat = async ({ seatId, userId, seanceId }) => {
  let bookedSeat = await bookSeatAccessor.bookSeat({
    seatId,
    userId,
    seanceId,
    expires: "in process implementation"
  });
  console.log(bookedSeat);
  return bookedSeat;
};

module.exports = {
  bookSeat
};

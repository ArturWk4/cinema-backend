const ticketServiceAccessor = require("../data-access/ticketService");
const ticketAccessor = require("../data-access/ticket");
const bookSeatService = require("../services/bookSeats");
const { validateBook } = require("../utils/validation");

const addTicket = async ({ seatId, seanceId, userId, services }) => {
  if (validateBook(seatId, userId, seanceId) && Array.isArray(services)) {
    const bookedSeat = await bookSeatService.getBookedSeat({
      seatId,
      seanceId,
      userId
    });
    if (!bookedSeat) {
      return null;
    } else {
      const ticket = await ticketAccessor.addTicket({
        seatId,
        userId,
        seanceId
      });
    }
  }
};

module.exports = {
  addTicket
};

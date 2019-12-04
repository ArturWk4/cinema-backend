const HttpStatus = require("http-status-codes");
const seatService = require("../../services/seats");

const addSeat = async (req, res) => {
  const { seatTypeId, xPos, yPos } = req.body;
  const seat = await seatService.addSeat({ seatTypeId, xPos, yPos });
  if (!seat) {
    res.status(HttpStatus.BAD_REQUEST).end();
  } else {
    res.status(HttpStatus.CREATED).end();
  }
};

const getAllSeats = async (req, res) => {
  const seats = await seatService.getAllSeats();
  res.status(HttpStatus.OK).json(seats);
};

const getSeat = async (req, res) => {
  const { id } = req.params;
  const seat = await seatService.getSeat(id);
  if (!seat) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    res.status(HttpStatus.OK).json(seat);
  }
};

module.exports = {
  addSeat,
  getAllSeats,
  getSeat
};

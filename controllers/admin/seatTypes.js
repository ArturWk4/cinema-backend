const HttpStatus = require("http-status-codes");
const seatTypesServices = require("../../services/seatTypes");

const addSeatType = async (req, res) => {
  const { title, cost } = req.body;
  const seatType = await seatTypesServices.addSeatType({ title, cost });
  if (!seatType) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Wrong data to add new seats type" });
  } else {
    res.status(HttpStatus.CREATED).end();
  }
};

const getAllSeatTypes = async (req, res) => {
  const seatTypes = await seatTypesServices.getAllSeatTypes();
  res.status(HttpStatus.OK).json(seatTypes);
};

const getSeatType = async (req, res) => {
  const { id } = req.params;
  const seatType = await seatTypesServices.getSeatType(id);
  if (!seatType) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    res.status(HttpStatus.OK).json(seatType);
  }
};

module.exports = {
  addSeatType,
  getAllSeatTypes,
  getSeatType
};

const seatTypeAccessor = require("../data-access/seatTypes");

const addSeatType = ({ title, cost }) => seatTypeAccessor.addSeatType({ title, cost });

const getAllSeatTypes = () => seatTypeAccessor.getAllSeatTypes();

const getSeatType = id => seatTypeAccessor.getSeatType(id);

module.exports = {
  addSeatType,
  getAllSeatTypes,
  getSeatType
};

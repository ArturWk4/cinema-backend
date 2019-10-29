const Sequelize = require("sequelize");
const sequelize = require("../connection");

const Hall = require("./hall");
const SeatType = require("./seatType");
const BookedSeat = require("./bookedSeat");

const seat = sequelize.define(
  "seat",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER
    },
    xPos: {
      allowNull: false,
      type: Sequelize.DOUBLE
    },
    yPos: {
      allowNull: false,
      type: Sequelize.DOUBLE
    }
  },
  {
    tableName: "seat",
    timestamps: false
  }
);

seat.hasMany(BookedSeat);
seat.belongsTo(Hall);
seat.belongsTo(SeatType);

module.exports = seat;

const Sequelize = require("sequelize");
const sequelize = require("../connection");

const bookedSeat = sequelize.define(
  "bookedSeat",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER
    },
    active: Sequelize.BOOLEAN
  },
  {
    tableName: "bookedSeat",
    timestamps: false
  }
);

module.exports = bookedSeat;

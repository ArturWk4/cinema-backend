const Sequelize = require("sequelize");
const sequelize = require("../connection");

const seatType = sequelize.define(
  "seatType",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    cost: {
      type: Sequelize.DOUBLE,
      allowNull: false
    }
  },
  {
    tableName: "seatType",
    timestamps: false
  }
);

module.exports = seatType;

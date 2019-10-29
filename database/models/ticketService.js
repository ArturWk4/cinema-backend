const Sequelize = require("sequelize");
const sequelize = require("../connection");

const ticketService = sequelize.define(
  "ticketService",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER
    },
    amount: Sequelize.INTEGER.UNSIGNED
  },
  {
    tableName: "ticketService",
    timestamps: false
  }
);

module.exports = ticketService;

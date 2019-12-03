const Sequelize = require("sequelize");
const sequelize = require("../connection");

const User = require("./user");
const Seat = require("./seat");
const Seance = require("./seance");
const TicketService = require("./ticketService");

const ticket = sequelize.define(
  "ticket",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER
    }
  },
  {
    tableName: "ticket",
    timestamps: false
  }
);

ticket.belongsTo(User);
ticket.belongsTo(Seat);
ticket.belongsTo(Seance);
ticket.hasMany(TicketService);

module.exports = ticket;

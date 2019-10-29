const Sequelize = require("sequelize");
const sequelize = require("../connection");

const TicketService = require("./ticketService");

const service = sequelize.define(
  "service",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false
    }
  },
  {
    tableName: "service",
    timestamps: false
  }
);

service.hasMany(TicketService);

module.exports = service;

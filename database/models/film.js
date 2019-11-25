const Sequelize = require("sequelize");
const sequelize = require("../connection");

const film = sequelize.define(
  "film",
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
    duration: {
      type: Sequelize.TIME,
      allowNull: false
    },
    startsAt: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    endsAt: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    description: Sequelize.STRING
  },
  {
    tableName: "film",
    timestamps: false
  }
);

module.exports = film;

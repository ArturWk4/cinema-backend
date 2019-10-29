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
    startsAt: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    endsAt: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    description: Sequelize.STRING(511)
  },
  {
    tableName: "film",
    timestamps: false
  }
);

module.exports = film;

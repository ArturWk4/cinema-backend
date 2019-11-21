const Sequelize = require("sequelize");
const sequelize = require("../connection");

const Film = require("./film");
const Hall = require("./hall");
const BookedSeat = require("./bookedSeat");

const seance = sequelize.define(
  "seance",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    time: {
      type: Sequelize.TIME,
      allowNull: false
    }
  },
  {
    tableName: "seance",
    timestamps: false
  }
);

seance.belongsTo(Film);
seance.belongsTo(Hall);
seance.hasMany(BookedSeat);

module.exports = seance;

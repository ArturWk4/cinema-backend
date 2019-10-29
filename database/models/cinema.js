const Sequelize = require("sequelize");
const sequelize = require("../connection");

const City = require("./city");
const Service = require("./service");

const cinema = sequelize.define(
  "cinema",
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
    }
  },
  {
    tableName: "cinema",
    timestamps: false
  }
);

cinema.hasMany(Service);
cinema.belongsTo(City);

module.exports = cinema;
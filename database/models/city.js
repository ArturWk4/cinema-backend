const Sequelize = require("sequelize");
const sequelize = require("../connection");

const city = sequelize.define(
  "city",
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
    }
  },
  {
    tableName: "city",
    timestamps: false
  }
);

module.exports = city;

const Sequelize = require("sequelize");
const sequelize = require("../connection");

const BookedSeat = require("./bookedSeat");

const user = sequelize.define(
  "user",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    tableName: "user",
    timestamps: false
  }
);

user.hasMany(BookedSeat);

module.exports = user;

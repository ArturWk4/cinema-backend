const Sequelize = require("sequelize");
const sequelize = require("../connection");

const Cinema = require("./cinema");

const hall = sequelize.define(
  "hall",
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
    imageName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    seatsAmount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 1000
      }
    }
  },
  {
    tableName: "hall",
    timestamps: false
  }
);

hall.belongsTo(Cinema);

module.exports = hall;

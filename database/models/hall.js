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
    }
  },
  {
    tableName: "hall",
    timestamps: false
  }
);

hall.belongsTo(Cinema);

module.exports = hall;

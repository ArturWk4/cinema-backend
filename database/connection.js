const Sequelize = require("sequelize");

const { DB_NAME, USER, PASSWORD, HOST } = require("../config");

const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
  host: HOST,
  dialect: "mysql"
});

module.exports = sequelize;

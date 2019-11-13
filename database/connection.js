const Sequelize = require("sequelize");

const { DB_NAME, DB_USER, DB_PASSWORD, HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: HOST,
  dialect: "mysql"
});

module.exports = sequelize;

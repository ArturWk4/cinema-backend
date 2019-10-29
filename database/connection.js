const Sequelize = require("sequelize");

const DB_NAME = "db_1";
const USER = "root";
const PASSWORD = "1111";

const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;

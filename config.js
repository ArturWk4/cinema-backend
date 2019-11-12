const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

module.exports = {
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST
};

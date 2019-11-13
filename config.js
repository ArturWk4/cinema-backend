const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

module.exports = {
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  HOST: process.env.HOST
};

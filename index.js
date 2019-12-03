const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const sequelize = require("./database/connection");
const publicRouter = require("./routes");
const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use("/public", publicRouter);

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

start();

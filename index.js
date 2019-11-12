const express = require("express");
const sequelize = require("./database/connection");
const publicRouter = require("./routes");
const { PORT } = require("./config");

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

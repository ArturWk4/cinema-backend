const express = require("express");

const sequelize = require("./database/connection");
const publicRouter = require("./routes/public");
const { PORT } = require("./utils/constants");

const app = express();

app.use(express.json());
app.use("/public", publicRouter);

async function start() {
  try {
    await sequelize
      .sync
      // { force: true }
      ();
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

start();

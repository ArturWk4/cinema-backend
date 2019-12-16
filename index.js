const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
dotenv.config({ path: "./.env" });
const sequelize = require("./database/connection");
const jwtStrategy = require("./passport/strategy");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin/index");
const userRouter = require("./routes/user/index");
const registrationRouter = require("./routes/registration");
const { PORT } = process.env;
const app = express();

passport.use(jwtStrategy);
app.use(express.json());
app.use("/auth", authRouter);
app.use("/registration", registrationRouter);
app.use(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  adminRouter
);
app.use("/user", passport.authenticate("jwt", { session: false }), userRouter);

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

start();

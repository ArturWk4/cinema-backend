const { Router } = require("express");
const createRouter = require("./create");
const loginRouter = require("./login");
const bookingRouter = require("./bookSeat");

const router = Router();

router.use("/create", createRouter);
router.use("/login", loginRouter);
router.use("/booking", bookingRouter);
// need to replace craete and login routers into public access

module.exports = router;

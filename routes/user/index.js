const { Router } = require("express");
const loginRouter = require("./login");
const bookingRouter = require("./bookSeat");

const router = Router();

router.use("/login", loginRouter);
router.use("/book-seat", bookingRouter);

module.exports = router;

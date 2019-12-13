const { Router } = require("express");
const { bookSeat } = require("../../controllers/user/bookSeat");

const router = Router();

router.post("/", bookSeat);

module.exports = router;

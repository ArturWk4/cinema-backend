const { Router } = require("express");
const {
  bookSeat,
  getBookedSeat,
  deleteBook
} = require("../../controllers/user/bookSeat");

const router = Router();

router.post("/", bookSeat);
router.get("/", getBookedSeat);
router.delete("/", deleteBook);

module.exports = router;

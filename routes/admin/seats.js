const { Router } = require("express");
const {
  addSeat,
  getAllSeats,
  getSeat
} = require("../../controllers/admin/seats");

const router = Router();

router.post("/", addSeat);
router.get("/", getAllSeats);
router.get("/:id", getSeat);

module.exports = router;

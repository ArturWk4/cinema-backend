const { Router } = require("express");
const {
  addSeatType,
  getAllSeatTypes,
  getSeatType
} = require("../../controllers/admin/seatTypes");

const router = Router();

router.post("/", addSeatType);
router.get("/", getAllSeatTypes);
router.get("/:id", getSeatType);

module.exports = router;

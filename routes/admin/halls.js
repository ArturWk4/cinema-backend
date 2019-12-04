const { Router } = require("express");
const {
  addHall,
  getAllHalls,
  getHall
} = require("../../controllers/admin/halls");

const router = Router();

router.post("/", addHall);
router.get("/", getAllHalls);
router.get("/:id", getHall);

module.exports = router;

const { Router } = require("express");
const {
  addCinema,
  getAllCinemas,
  getCinema,
  deleteCinema
} = require("../../controllers/admin/cinemas");

const router = Router();

router.post("/", addCinema);
router.get("/", getAllCinemas);
router.get("/:id", getCinema);
router.delete("/:id", deleteCinema);

module.exports = router;

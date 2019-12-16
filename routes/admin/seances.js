const { Router } = require("express");
const {
  addSeance,
  getAllSeances,
  getSeance
} = require("../../controllers/admin/seances");

const router = Router();

router.post("/", addSeance);
router.get("/", getAllSeances);
router.get("/:id", getSeance);

module.exports = router;

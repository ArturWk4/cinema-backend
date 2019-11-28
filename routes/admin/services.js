const { Router } = require("express");
const {
  addService,
  getAllServices,
  getService
} = require("../../controllers/admin/services");

const router = Router();

router.post("/", addService);
router.get("/", getAllServices);
router.get("/:id", getService);

module.exports = router;

const { Router } = require("express");
const { registration } = require("../controllers/auth");
const router = Router();

router.post("/", registration);
module.exports = router;

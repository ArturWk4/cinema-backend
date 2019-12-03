const { Router } = require("express");
const userLogin = require("./user/login");
const adminLogin = require("./admin/login");

const router = Router();
router.use("/user", userLogin);
router.use("/admin", adminLogin);

module.exports = router;

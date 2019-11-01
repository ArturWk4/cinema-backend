const { Router } = require("express");
const userRouter = require("./user");
const adminRouter = require("./admin");

const router = Router();
router.use("/user", userRouter);
router.use("/admin", adminRouter);

module.exports = router;

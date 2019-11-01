const { Router } = require("express");
const createRouter = require("./create");
const loginRouter = require("./login");

const router = Router();

router.use("/create", createRouter);
router.use("/login", loginRouter);

module.exports = router;

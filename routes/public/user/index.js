const { Router } = require("express");
const createRouter = require("./create");

const router = Router();

router.use("/create", createRouter);

module.exports = router;

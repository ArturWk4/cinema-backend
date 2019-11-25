const { Router } = require("express");
const filmsRouter = require("./films");

const router = Router();

router.use("/films", filmsRouter);

module.exports = router;

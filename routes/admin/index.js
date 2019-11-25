const { Router } = require("express");
const filmsRouter = require("./films");
const cinemasRouter = require("./cinemas");
const router = Router();

router.use("/films", filmsRouter);
router.use("/cinemas", cinemasRouter);

module.exports = router;

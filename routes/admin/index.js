const { Router } = require("express");
const filmsRouter = require("./films");
const cinemasRouter = require("./cinemas");
const serviceRouter = require("./services");
const router = Router();

router.use("/films", filmsRouter);
router.use("/cinemas", cinemasRouter);
router.use("/services", serviceRouter);

module.exports = router;

const { Router } = require("express");
const filmsRouter = require("./films");
const cinemasRouter = require("./cinemas");
const serviceRouter = require("./services");
const seatsRouter = require("./seats");
const seatTypesRouter = require("./seatTypes");

const router = Router();

router.use("/films", filmsRouter);
router.use("/cinemas", cinemasRouter);
router.use("/services", serviceRouter);
router.use("/seats", seatsRouter);
router.use("/seat-types", seatTypesRouter);

module.exports = router;

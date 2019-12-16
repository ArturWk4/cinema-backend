const { Router } = require("express");
const loginRouter = require("./login");
const filmsRouter = require("./films");
const cinemasRouter = require("./cinemas");
const serviceRouter = require("./services");
const seatTypesRouter = require("./seatTypes");
const hallsRouter = require("./halls");
const seanceRouter = require("./seances");

const router = Router();

router.use("/login", loginRouter);
router.use("/films", filmsRouter);
router.use("/cinemas", cinemasRouter);
router.use("/services", serviceRouter);
router.use("/seat-types", seatTypesRouter);
router.use("/halls", hallsRouter);
router.use("/seances", seanceRouter);

module.exports = router;

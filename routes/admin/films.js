const { Router } = require("express");
const {
  getFilm,
  getAllFilms,
  addFilm,
  deleteFilm
} = require("../../controllers/admin/films");

const router = Router();

router.post("/", addFilm);
router.get("/:id", getFilm);
router.get("/", getAllFilms);
router.delete("/:id", deleteFilm);

module.exports = router;

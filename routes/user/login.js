const { Router } = require("express");
const { login } = require("../../controllers/auth");
const { ROLE_USER } = require("../../utils/constants");
const router = Router();

router.post("/", login(ROLE_USER));

module.exports = router;

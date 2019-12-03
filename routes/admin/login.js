const { Router } = require("express");
const { login } = require("../../controllers/auth");
const { ROLE_ADMIN } = require("../../utils/constants");

const router = Router();

router.post("/", login(ROLE_ADMIN));

module.exports = router;

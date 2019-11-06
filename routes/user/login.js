const { Router } = require("express");
const { login, isUser } = require("../../controllers/auth");
const router = Router();

router.post("/", isUser, login);

module.exports = router;

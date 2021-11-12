const express = require("express");
const { getUserInfo, loginUser } = require("../controllers/auth");

const router = express.Router();

// Routes

router.route("/").get(getUserInfo).post(loginUser);

module.exports = router;

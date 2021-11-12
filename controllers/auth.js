const User = require("../models/User");
const jwt = require("jsonwebtoken");

// @route GET api/v1/auth
// @desc Get logged in user
// @access Private

exports.getUserInfo = async (req, res) => {
  res.status(200).json({ msg: "Get user info" });
};

// @route POST api/v1/auth
// @desc Auth user and get token
// @access Public

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  res
    .status(200)
    .json({
      msg: `Login user with email ${email} and password ${password} successful`,
    });
};

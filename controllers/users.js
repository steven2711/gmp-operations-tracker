const User = require("../models/User");

// @route GET api/v1/users
// @desc Create a user
// @access Admin

exports.getUsers = async (req, res) => {
  res.status(200).json({ msg: "Get all users" });
};

// @route POST api/v1/users
// @desc Create a user
// @access Admin

exports.createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  // Check to see if user already exists
  // A temp password is provided. On users first login, a propmt will ask user to create a personal password

  res.status(201).json({ msg: `User ${email} has been created` });
};

// @route PUT api/v1/users/:id
// @desc Edit a users info
// @access Admin

exports.updateUser = async (req, res) => {
  // Check to see if user already exists

  res.status(200).json({ msg: `User ${req.params.id} has been updated` });
};

// @route DELETE api/v1/users/:id
// @desc Delete a user
// @access Admin

exports.deleteUser = async (req, res) => {
  // Check to see if user already exists

  res.status(200).json({ msg: `User ${req.params.id} has been deleted` });
};

const { User } = require("../connection/models");

// @route GET api/v1/users
// @desc Create a user
// @access Admin

exports.getUsers = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json({ success: true, data: users });
};

// @route POST api/v1/users
// @desc Create a user
// @access Admin

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, role } = req.body;

  try {
    // Check to see if user already exists
    const [user, created] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        firstName,
        lastName,
        email,
        role,
      },
    });

    if (!created) {
      return res.status(200).json({
        success: false,
        msg: `User with email ${email} already exists`,
        data: null,
      });
    } else {
      return res.status(201).json({
        success: true,
        msg: `User added to database`,
        data: user,
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: err.errors[0].message,
      data: err,
    });
  }
};

// @route PUT api/v1/users/:id
// @desc Edit a users info
// @access Admin

exports.updateUser = async (req, res) => {
  try {
    // Check to see if user already exists
    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(200).json({
        success: false,
        msg: `User id ${req.params.id} does not exist`,
        data: null,
      });
    }

    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res
      .status(200)
      .json({ success: true, msg: `Updated user ${req.params.id}` });
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: err.errors[0].message,
      data: err,
    });
  }

  // res.status(200).json({ msg: `User ${req.params.id} has been updated` });
};

// @route DELETE api/v1/users/:id
// @desc Delete a user
// @access Admin

exports.deleteUser = async (req, res) => {
  try {
    // Check to see if user already exists

    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(200).json({
        success: false,
        msg: `User id ${req.params.id} does not exist`,
        data: null,
      });
    }

    await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      msg: `User ${req.params.id} has been deleted`,
      data: null,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: err.errors[0].message,
      data: err,
    });
  }
};

// We need a custom error handling class.
// Error types:

// SequelizeDatabaseError - when sqecified types do not match

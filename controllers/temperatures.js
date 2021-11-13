// @route GET api/v1/temperatures
// @desc Get log of all temperature entries
// @access Private/Admin

exports.getTemperatureLog = async (req, res) => {
  res.status(200).json({ msg: "Get log of temperatures" });
};

// @route POST api/v1/temperatures
// @desc Create a new record of scale calibration
// @access Private/Admin

exports.createTemperatureLogItem = async (req, res) => {
  const { unit, temperature, date, user_id } = req.body;

  res
    .status(201)
    .json({ msg: `Item ${unit} has been added to temperature log` });
};

// @route PUT api/v1/temperatures/:id
// @desc Update a scale calibration log item
// @access Private/Admin

exports.updateTemperatureLogItem = async (req, res) => {
  // Check to see if log item exists

  // User would need Admin to approve of any updates.

  res.status(200).json({
    msg: `Temperature log item ${req.params.id} has been updated`,
  });
};

// @route DELETE api/v1/temperatures/:id
// @desc Delete an log item in scale calibration
// @access Admin

exports.deleteTemperatureLogItem = async (req, res) => {
  // Check to see if log item exists

  res.status(200).json({
    msg: `Log item ${req.params.id} in temperature log has been deleted`,
  });
};

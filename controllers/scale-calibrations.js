// @route GET api/v1/scale-calibrations
// @desc Get log of all used ingredients
// @access Private/Admin

exports.getScaleCalibrationLog = async (req, res) => {
  res.status(200).json({ msg: "Get log of scale calibrations" });
};

// @route POST api/v1/scale-calibrations
// @desc Create a new record of scale calibration
// @access Private/Admin

exports.createScaleCalibrationLogItem = async (req, res) => {
  const { data, scale, user_id, balanced, weight } = req.body;

  res
    .status(201)
    .json({ msg: `Item ${scale} has been added to scale calibration log` });
};

// @route PUT api/v1/scale-calibrations/:id
// @desc Update a scale calibration log item
// @access Private/Admin

exports.updateScaleCalibrationLogItem = async (req, res) => {
  // Check to see if log item exists

  // User would need Admin to approve of any updates.

  res.status(200).json({
    msg: `Scale calibration log item ${req.params.id} has been updated`,
  });
};

// @route DELETE api/v1/scale-calibrations/:id
// @desc Delete an log item in scale calibration
// @access Admin

exports.deleteScaleCalibrationLogItem = async (req, res) => {
  // Check to see if log item exists

  res.status(200).json({
    msg: `Log item ${req.params.id} in scale calibration log has been deleted`,
  });
};

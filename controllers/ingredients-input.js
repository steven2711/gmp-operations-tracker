// @route GET api/v1/ingredients/input
// @desc Get log of all ingredient inputs
// @access Private/Admin

exports.getAllIngredientInputLogs = async (req, res) => {
  res.status(200).json({ msg: "Get all ingredients inputed" });
};

// @route POST api/v1/ingredients/input
// @desc Create a new record of ingredient input
// @access Private/Admin

exports.createIngredientInputLogItem = async (req, res) => {
  res.status(201).json({ msg: "Ingredient input has been created" });
};

// @route PUT api/v1/ingredients/input/:id
// @desc Update ingredient use log item
// @access Private/Admin

exports.updateIngredientInputLogItem = async (req, res) => {
  // Check to see if log item exists

  // User would need Admin to approve of any updates.

  res.status(20).json({
    msg: `Ingredient input log item ${req.params.id} has been updated`,
  });
};

// @route Delete api/v1/ingredients/input/:id
// @desc Delete an ingredient input log item
// @access Admin

exports.deleteIngredientInputLogItem = async (req, res) => {
  // Check to see if log item exists

  res
    .status(20)
    .json({ msg: `Ingredient input ${req.params.id} has been deleted` });
};

// @route GET api/v1/ingredients/input
// @desc Get log of all ingredient inputs
// @access Private/Admin

exports.getAllIngredientInputLogs = async (req, res) => {
  res.status(200).json({ msg: "Get all ingredients in input log" });
};

// @route POST api/v1/ingredients/input
// @desc Create a new record of ingredient input
// @access Private/Admin

exports.createIngredientInputLogItem = async (req, res) => {
  const {
    batch_id,
    sample_date,
    results,
    formula_mg,
    date_logged,
    user_id,
    total_weight_mg,
    labeled,
  } = req.body;

  res
    .status(201)
    .json({ msg: `Ingredient with batch id of ${batch_id} was created` });
};

// @route PUT api/v1/ingredients/input/:id
// @desc Update ingredient use log item
// @access Private/Admin

exports.updateIngredientInputLogItem = async (req, res) => {
  // Check to see if log item exists

  // User would need Admin to approve of any updates.

  res.status(200).json({
    msg: `Ingredient input log item ${req.params.id} has been updated`,
  });
};

// @route Delete api/v1/ingredients/input/:id
// @desc Delete an ingredient input log item
// @access Admin

exports.deleteIngredientInputLogItem = async (req, res) => {
  // Check to see if log item exists

  res
    .status(200)
    .json({ msg: `Ingredient input ${req.params.id} has been deleted` });
};

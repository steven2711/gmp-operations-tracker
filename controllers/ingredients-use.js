// @route GET api/v1/ingredients/use
// @desc Get log of all used ingredients
// @access Private/Admin

exports.getAllIngredientUseLogs = async (req, res) => {
  res.status(200).json({ msg: "Get all ingredients used" });
};

// @route POST api/v1/ingredients/use
// @desc Create a new record of ingredient usage
// @access Private/Admin

exports.createIngredientUseLogItem = async (req, res) => {
  res.status(201).json({ msg: "Ingredient used has been created" });
};

// @route PUT api/v1/ingredients/use/:id
// @desc Update ingredient use log item
// @access Private/Admin

exports.updateIngredientUseLogItem = async (req, res) => {
  // Check to see if log item exists

  // User would need Admin to approve of any updates.

  res
    .status(20)
    .json({ msg: `Ingredient log item ${req.params.id} has been updated` });
};

// @route Delete api/v1/ingredients/use/:id
// @desc Delete an ingredient use log item
// @access Admin

exports.deleteIngredientUseLogItem = async (req, res) => {
  // Check to see if log item exists

  res
    .status(20)
    .json({ msg: `Ingredient use ${req.params.id} has been deleted` });
};

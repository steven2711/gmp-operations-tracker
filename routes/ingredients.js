const express = require("express");
const {
  getAllIngredientUseLogs,
  createIngredientUseLogItem,
  updateIngredientUseLogItem,
  deleteIngredientUseLogItem,
} = require("../controllers/ingredients-use");
const {
  getAllIngredientInputLogs,
  createIngredientInputLogItem,
  updateIngredientInputLogItem,
  deleteIngredientInputLogItem,
} = require("../controllers/ingredients-input");

const router = express.Router();

// Routes

// Ingredient Use
router
  .route("/use")
  .get(getAllIngredientUseLogs)
  .post(createIngredientUseLogItem);

router
  .route("/use/:id")
  .put(updateIngredientUseLogItem)
  .delete(deleteIngredientUseLogItem);

// Ingredient Input
router
  .route("/input")
  .get(getAllIngredientInputLogs)
  .post(createIngredientInputLogItem);

router
  .route("/input/:id")
  .put(updateIngredientInputLogItem)
  .delete(deleteIngredientInputLogItem);

module.exports = router;

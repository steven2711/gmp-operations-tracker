const express = require("express");
const {
  getTemperatureLog,
  createTemperatureLogItem,
  updateTemperatureLogItem,
  deleteTemperatureLogItem,
} = require("../controllers/temperatures");

const router = express.Router();

// Routes
router.route("/").get(getTemperatureLog).post(createTemperatureLogItem);

router
  .route("/:id")
  .put(updateTemperatureLogItem)
  .delete(deleteTemperatureLogItem);

module.exports = router;

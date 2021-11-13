const express = require("express");
const {
  getScaleCalibrationLog,
  createScaleCalibrationLogItem,
  updateScaleCalibrationLogItem,
  deleteScaleCalibrationLogItem,
} = require("../controllers/scale-calibrations");

const router = express.Router();

// Routes
router
  .route("/")
  .get(getScaleCalibrationLog)
  .post(createScaleCalibrationLogItem);

router
  .route("/:id")
  .put(updateScaleCalibrationLogItem)
  .delete(deleteScaleCalibrationLogItem);

module.exports = router;

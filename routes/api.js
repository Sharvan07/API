const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/devices", dataController.getAllDevices);
router.post("/devices", dataController.addDevice);

module.exports = router;

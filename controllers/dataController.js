const dataService = require("../services/dataService");
const Device = require("../models/deviceModel");

exports.getAllDevices = async (req, res) => {
  try {
    const devices = await dataService.getAllDevices();
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addDevice = async (req, res) => {
  try {
    const { id, name, type, status, lastUpdated } = req.body;
    const device = new Device(id, name, type, status, lastUpdated);
    await dataService.addDevice(device);
    res.status(201).json({ message: "Device added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

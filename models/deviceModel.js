class Device {
  constructor(id, name, type, status, lastUpdated) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.status = status;
    this.lastUpdated = lastUpdated;
  }
}

module.exports = Device;

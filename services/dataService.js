const { poolPromise } = require("../config/dbConfig");
const sql = require("mssql");

class DataService {
  async getAllDevices() {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Devices");
    return result.recordset;
  }

  async addDevice(device) {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("id", sql.Int, device.id)
      .input("name", sql.VarChar, device.name)
      .input("type", sql.VarChar, device.type)
      .input("status", sql.VarChar, device.status)
      .input("lastUpdated", sql.DateTime, device.lastUpdated)
      .query(
        "INSERT INTO Devices (id, name, type, status, lastUpdated) VALUES (@id, @name, @type, @status, @lastUpdated)"
      );
    return result;
  }
}

module.exports = new DataService();

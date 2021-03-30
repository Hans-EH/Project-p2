const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });

exports.addDevice = async function addDevice(deviceObject) {
    try {
      await client.connect();
      const db = client.db("<monitor-project>");
      const devices = db.collection("devices");
  
      // Insert the user object into users table
      const device_res = await devices.insertOne(deviceObject);
  
      console.log(device_res);
    } catch (error) {
      console.log(error);
    }
}

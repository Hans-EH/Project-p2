const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });

exports.getAllDevices = async function getAllDevices(){
    try {
        await client.connect();
        const db = client.db("<monitor-project>");
        const devices = db.collection("devices");
    
        // Find all devices in the device collection and store as an array
        const device_list = devices.find({}).toArray();
    
        //Return the device list
        console.table(device_list);
        return device_list;
      } catch (error) {
        console.log(error);
      }
}
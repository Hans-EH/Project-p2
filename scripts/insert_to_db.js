exports.addDevice = async function addDevice(deviceObject) {
    try {
      await client.connect();
      const db = client.db("<monitor-project>");
      const devices = db.collection("devices");
  
      // Insert the user object into users table
      const device_res = await devices.insertOne(deviceObject);
  
      console.log(device_res.result);
    } catch (error) {
      console.log(error);
    }
}

const { parse } = require("url");
const { MongoClient } = require("mongodb");
const { Device, Appliance } = require("./_devices");

// DB settings
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function checkInsert(props) {
  try {
    await client.connect();
    const database = client.db("app-devices");
    const device_collection = database.collection("devices");
    const query = { UUID: props.UUID };
    const result = await device_collection.findOne(query);

    // If device isn't in the collection add it
    if (result == null) {
      // Convert Object to JSON string
      let json_format = JSON.stringify(props);

      // Insert JSON data in to collection
      const ins_res = await device_collection.insertOne(props);
      console.dir(ins_res);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

let iphone_12 = new Device("iphone_12");
console.table(iphone_12);
//checkInsert(iphone_12).catch(console.dir);

let refrig = new Appliance("Refrigirator", 1240);
console.table(refrig);
//checkInsert(refrig).catch(console.dir);

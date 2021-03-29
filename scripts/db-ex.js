const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function testConnect() {
  try {
    await client.connect();
    const database = client.db("monitor-project");
    console.log("Got to this point")
    const table = database.collection("users");
    const query = { };
    const documentList = await table.find({}).toArray();
    return documentList;
  } catch (e) {
    console.error(e);
  }
};

testConnect();

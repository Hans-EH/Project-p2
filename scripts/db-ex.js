const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function testConnect() {
  try {
    await client.connect();
    const database = client.db("<monitor-project>");
    console.log("Got to this point")
    const table = database.collection("users");
    const query = { };
    const documentList = await table.find({}).toArray();
    for (i of documentList){
      console.log(`id: ${i._id} - username: ${i.user_id}`);
      const profile_table = database.collection("profiles");
      const profile_query = {user_link : i._id};
      const profile = await profile_table.findOne(profile_query);
      console.log(profile);
    }

    return documentList;
  } catch (e) {
    console.error(e);
  }
};

testConnect();

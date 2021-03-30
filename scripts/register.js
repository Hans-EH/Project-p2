const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function testConnect() {
  try {
    await client.connect();
    const database = client.db("<monitor-project>");
    const table = database.collection("users");
    const profile_table = database.collection("profiles");
    const documentList = await table.find({}).toArray();

    //shows all registered users
    console.log("All Registered Users: " + documentList.length + "\n");
    for (let i = 0; i < documentList.length; i++) {
      const profile_link = documentList[i]._id.toString();
      const profile_query = { user_link: profile_link };
      const profile = await profile_table.findOne(profile_query);
      let j = i + 1;
      console.log("User " + j + ":");
      console.log(documentList[i]);
      console.log(profile);
    }
    // shows all users end
    return documentList;
  } catch (e) {
    console.error(e);
  }
}

async function registerUser() {
  try {
    await client.connect();
    const db = client.db("<monitor-project>");
    const table = db.collection("users");
    const profile_table = db.collection("profiles");

    const hans = {
      user_id: "Frederik",
      password: "123456",
    };

    const res = await table.insertOne(hans);
    console.log(res);
  } catch (error) {
    print(error);
  }
}

testConnect();
registerUser();

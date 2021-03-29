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
    //Test profiling
    const profile_table = database.collection("profiles");


    //shows all registered users
    console.log("All Registered Users: "+documentList.length+"\n");
    for(let i = 0; i < documentList.length; i++){
      const profile_link = documentList[i]._id.toString();
      const profile_query = {user_link : profile_link};
      const profile = await profile_table.findOne(profile_query);
      let j = i+1;
      console.log("User "+j+":");
      console.log(documentList[i]);
      console.log(profile);
    }

    return documentList;
  } catch (e) {
    console.error(e);
  }
};

testConnect();

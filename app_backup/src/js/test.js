const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    const database = client.db("pokemon");
    const pokedex = database.collection("pokedex");
    const query = { "type.0": "Water" };
    const poke = await pokedex.countDocuments(query);

    const docList = await pokedex.find({}).toArray();

    for (let item in docList) {
      let obj = docList[item];
      console.log(`Item: ${obj.id}`);
      console.log(obj.name.english);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

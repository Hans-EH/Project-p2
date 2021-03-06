const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt"); //Importing the NPM bcrypt package.
const saltRounds = 10; //We are setting salt rounds, higher is safer.

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

async function registerUser(userObject) {
  try {
    await client.connect();
    const db = client.db("<monitor-project>");
    const users = db.collection("users");
    const profiles = db.collection("profiles");

    // encrypt user password
    userObject.password = bcrypt.hash(
      userObject.password,
      saltRounds,
      (err, hash) => {
        return hash;
      }
    );

    // Insert the user object into users table
    console.table(userObject);
    const user_res = await users.insertOne(userObject);

    // Check if the insert was succesfull.
    if (user_res.result.ok && user_res.result.n == 1) {
      console.log(`- Users Created succesfully: ${user_res.result.ok}`);

      // Profile Initial settings
      const userProfile = {
        user_link: user_res.insertedId,
        nightmode: false,
      };

      // Create one to one insert with users
      const profile_res = await profiles.insertOne(userProfile);
      console.log(`- Profiles Created succesfully: ${profile_res.result.ok}`);
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

// Dummy Data
const frederik = {
  email: "thorbensen@gmail.com",
  password: "frederik123",
};

registerUser(frederik);

exports.validateRegInfo = function validateRegInfo(form) {
  email = form.email1.value;
  password1 = form.password1.value;
  password2 = form.password2.value;

  if (email == "")
    alert("Please enter a valid email on the form name@mail.com");
  // If password not entered
  else if (password1 == "") alert("Please enter Password");
  // If confirm password not entered
  else if (password2 == "") alert("Please confirm password");
  // If Not same return False.
  else if (password1 != password2) {
    alert("\nPassword did not match: Please try again...");
    return false;
  }

  // If same return True.
  else {
    alert("User Registration Complete: Welcome to Sustanify!!");
    return true;
  }
};

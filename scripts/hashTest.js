const bcrypt = require("bcrypt"); //Importing the NPM bcrypt package.
const saltRounds = 10; //We are setting salt rounds, higher is safer.
const myPlaintextPassword = "frederik1404"; //Unprotected password

/* Here we are getting the hashed password from the callback,
we can save that hash in the database */
let tester = "";
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  tester = hash;
  console.log(hash);
});

// /* Here we can compare the hashed password after we get it from
// the database with the plaintext password */
bcrypt.compare(myPlaintextPassword, tester, function (error, response) {
  console.log(response);
});

const bcrypt = require("bcrypt"); //Importing the NPM bcrypt package.
const saltRounds = 10; //We are setting salt rounds, higher is safer.

/* Here we are getting the hashed password from the callback,
we can save that hash in the database */
let frederik = {
  email: "thorbensen@gmail.com",
  password: "frederik123",
};

frederik.password = "hej hej";

async function encryptPass(user) {
  user.password = await bcrypt.hash(user.password, saltRounds, (err, hash) => {
    console.log(hash);
  });
}

encryptPass(frederik);
console.log(frederik);

// /* Here we can compare the hashed password after we get it from
// the database with the plaintext password */
// bcrypt.compare(myPlaintextPassword, tester, function (error, response) {
//   //console.log(response);
// });

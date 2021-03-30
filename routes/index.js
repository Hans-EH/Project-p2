var express = require("express");
var router = express.Router();

const { Device } = require("../scripts/Device");
const { activeProbability } = require("../scripts/simulation");

authenticated = true;

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("Cookies: ", req.cookies); // Cookies that have not been signed
  console.log("Signed Cookies: ", req.signedCookies); // Cookies that have been signed

  if (authenticated) {
    res.render("index", { title: "Express" });
  } else {
    res.redirect("/login");
  }
});

// Settings route
router.get("/settings", function (req, res, next) {
  if (authenticated) {
    res.render("settings", { title: "Settings" });
  } else {
    res.redirect("/login");
  }
});

// Devices Route
router.get("/devices", function (req, res, next) {
  if (authenticated) {
    // Data
    let myCooler = new Device("myCooler", 1000);
    myCooler.updateActiveTime({ "09:00": true, "18:00": true });

    res.render("devices", {
      title: "Devices",
      items: activeProbability(myCooler),
    });
  } else {
    res.redirect("/login");
  }
});

// User registration route
router.get("/register", function (req, res, next) {
  res.render("register", { title: "register" });
});

// User authentication route
router.get("/login", function (req, res, next) {
  let hello = () => {
    console.log("Hello World");
  };

  res.render("login", { title: "login", hello: hello() });
});

module.exports = router;

var express = require("express");
var router = express.Router();

const { Device } = require("../scripts/Device");
const { activeProbability } = require("../scripts/simulation");
const { addDevice } = require("../scripts/insert_to_db");
const { getAllDevices } = require("../scripts/retreive_from_db");

authenticated = true;

// GET Home page
router.get("/", function (req, res, next) {
  console.log("Cookies: ", req.cookies); // Cookies that have not been signed
  console.log("Signed Cookies: ", req.signedCookies); // Cookies that have been signed

  if (authenticated) {
    res.render("index", { title: "Express" });
  } else {
    res.redirect("/login");
  }
});

// GET Settings route
router.get("/settings", function (req, res, next) {
  if (authenticated) {
    res.render("settings", { title: "Settings" });
  } else {
    res.redirect("/login");
  }
});

// GET Devices Route
router.get("/devices", async function (req, res, next) {
  if (authenticated) {
    // This is an example of showing a device on our device.html
    let myCooler = new Device("myCooler", 1000);
    myCooler.updateActiveTime({ "09:00": true, "18:00": true });

    //Make a request to our database to retrieve a list of all devices and wait for a respond
    let deviceList = await getAllDevices();

    //Pass over the device list and probability array of the above example to the client
    res.render("devices", {
      title: "Devices",
      items: activeProbability(myCooler),
      devices: deviceList,
    });
  } else {
    res.redirect("/login");
  }
});

// POST Devices route
router.post("/devices/post", function (req, res) {
  let newDevice = new Device(req.body.devicename, req.body.energyusage);
  newDevice.updateActiveTime({ "18:00": true });
  addDevice(newDevice);
  console.log(
    `Devicename: ${req.body.devicename}, Energy Usage: ${req.body.energyusage}`
  );
  res.end("Successfully got device!");
});

// GET Register route
router.get("/register", function (req, res, next) {
  res.render("register", { title: "register" });
});

// POST Register route
router.post("/register/post", function (req, res, next) {
  console.log("Hello World");
});

// User authentication route
router.get("/login", function (req, res, next) {
  let hello = () => {
    console.log("Hello World");
  };

  res.render("login", { title: "login", hello: hello() });
});

module.exports = router;

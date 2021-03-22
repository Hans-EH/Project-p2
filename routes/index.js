var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Demo route
router.get("/hello", function (req, res, next) {
  res.render("hello", { title: "Hello Word" });
});

// User registration route
router.get("/register", function (req, res, next) {
  res.render("register", { title: "register" });
});

// User authentication route
router.get("/login", function (req, res, next) {
  res.render("login", { title: "login" });
});

// Settings route
router.get("/settings", function (req, res, next) {
  res.render("settings", { title: "Settings" });
});

module.exports = router;

const { parse } = require("url");
const { MongoClient } = require("../node_modules/mongodb");
const { Device, Appliance } = require("./_devices");

let iphone_12 = new Device("iphone_12");
console.table(iphone_12);

let refrig = new Appliance("Refrigirator", 1240);
console.table(refrig);

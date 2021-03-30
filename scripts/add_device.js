
//Read form input data
const { Device } = require("Device.js"); //TODO Fix this bit

function createDevice(form){

let input = readForm(form);

let newDevice = new Device(input.name, input.energyUsage);

console.log(newDevice.name);
console.log(newDevice.energyUsage);

return newDevice;
}

function readForm(form){
    let name = form.devicename.value;
    let energyUsage = form.energyusage.value;
    let output = {name: name, energyUsage: energyUsage}

    return output;

}
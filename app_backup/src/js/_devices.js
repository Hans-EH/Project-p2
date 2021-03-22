const { v4: uuidv4 } = require("uuid");

/**
 * @generator
 * @param {string} dev_type Type of the appliance, ex: Regfrigirator, Heater
 * @param {number} energyUsage The amount of constant energy used ex: 42 mAH
 * @returns {Object} Appliance information neatly packed
 */

exports.Device = class Device {
  constructor(dev_type, rCycle = null) {
    this.deviceType = dev_type;
    this.UUID = uuidv4();
    this.added_date = Date();
    this.last_recharge = Date();
  }

  recharge() {
    this.charging = true;
    this.last_recharge = Date();
  }
};

/**
 * @generator
 * @param {string} dev_type Type of the appliance, ex: Regfrigirator, Heater
 * @param {number} energyUsage The amount of constant energy used ex: 42 mAH
 * @returns {Object} Appliance information neatly packed
 */

exports.Appliance = class Appliance {
  constructor(dev_type, energyUsage = 0) {
    this.deviceType = dev_type;
    this.UUID = uuidv4();
    this.added_date = Date();
    this.active = true;
    this.energyUsage = energyUsage;
  }
};

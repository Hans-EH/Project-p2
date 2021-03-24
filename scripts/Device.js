exports.Device = class Device {

    /**
     * Constructs a device class with a name, energy usage and active time set to low by default
     * @param {string} name Name of the device
     * @param {number} energyUsage The energy usage of the device in watts
     */
    constructor(name, energyUsage) {
        this.name = name;
        this.energyUsage = energyUsage;
        this.timeAdded = new Date().toLocaleString();
        this.timeModified = new Date().toLocaleString();
        this.activeTime = {"00:00": false, "01:00": false, "02:00": false, "03:00": false, "04:00": false, "05:00": false,
                            "06:00": false, "07:00": false, "08:00": false, "09:00": false,"10:00": false, "11:00": false,
                            "12:00": false, "13:00": false, "14:00": false, "15:00": false, "16:00": false, "17:00": false,
                            "18:00": false, "19:00": false, "20:00": false, "21:00": false, "22:00": false, "23:00": false};

    }

    /**
     * Updates a single time-slot in the active time array
     * @param {Object} time An object containing the time slot and a boolean value in this format.
     * e.g {"00:00": true, "01:00": false}
     */
    updateActiveTime(time){
        //Loop over every entry in the time dictionary object
        //adding only valid time strings to the active array
        for (let key in time){
            if (key in this.activeTime){
                this.activeTime[key] = time[key];
            }
        }

        //Update the time since last modification
        this.timeModified = new Date().toLocaleString();

    }
}
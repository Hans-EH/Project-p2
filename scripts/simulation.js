const {Device} = require("./Device");
const {arrayMin} = require("./helpers.js")
/**
 * Probability function, takes a device and computes a probability vector of the device
 * active time
 * @param {Device} device An instance of the device class
 * @return p A Probability distribution for the active time of the given device
 */
exports.activeProbability = function activeProbability(device){
    let onVector = [];
    let propVector = [];
    let activeIndex = [];

    /* Create an array of ones and zeroes depending on the device active time.
    *  e.g [0, 0, 0, 1, 0, ... 1] with length 24 */
    for (let key in device.activeTime){
        onVector.push(device.activeTime[key] === true ? 1 : 0)
    }

    /* Find the indexes with an on state in the onVector
    *  e.g [3,  23]*/
    for (let i = 0; i < onVector.length; i++){
        if (onVector[i] === 1){
            activeIndex.push(i)
        }
    }

    /* */
    for (let i = 0; i < onVector.length; i++){

        propVector[i] = arrayMin(activeIndex.map(n => {
            return (Math.abs(n - i))
        }))
    }
    propVector = propVector.map(x => {
        return Math.exp(-(x**2))
    })

    return propVector
    //[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5]
    //                            9                          18

}
//Finding the minimum integer in array - function
exports.arrayMin = function arrayMin(array) {
    let minVal = array.reduce((a, b) => {
        return a < b? a : b});
    return minVal;
}

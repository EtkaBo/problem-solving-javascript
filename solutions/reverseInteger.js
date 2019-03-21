/**
 * Problem Link:
 * https://leetcode.com/problems/reverse-integer/
 * 
 * 
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var isNegativeNum = x < 0
    let reversedInt = +reverseString(x.toString(), isNegativeNum);
    
    if(reversedInt > 2147483647 || reversedInt < -2147483648) {return 0};

    return reversedInt;

};

var reverseString = function(s, isNegativeNum) {
let strToReturn = isNegativeNum ? '-' : '';
for(var i = s.length - 1; i >= 0; i--) {
    
    if(isNegativeNum && i === 0) {
        break;
    }
    strToReturn += s[i];
}
return strToReturn;
}
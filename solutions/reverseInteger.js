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
        let reversedStr = reverseString(x.toString(), isNegativeNum);
        return reversedStr.length > 9 ? 0 : +reversedStr;

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
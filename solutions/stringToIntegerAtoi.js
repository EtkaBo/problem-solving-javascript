/**Problem Link:
 * https://leetcode.com/problems/string-to-integer-atoi/
 * 
 * 
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    var validCharList = validCharObject();
    var validString = '';
    
    for(var i =0; i< str.length; i++) {
        
        if(str[i] === ' ') {
            continue;
        }
        
        if(validCharList[str[i]] === undefined) {
            return 0;
        }
        validString += str[i]
    }
    
    if(+validString > 2147483647) {
        return 2147483647;
    }
    if(+validString < -2147483648) {
        return -2147483648;
    }

    return +validString;
    
};

var validCharObject = function() {
    return {
        '0':0,
        '1':1,
        '2': 2,
        '3':3,
        '4':4,
        '5':5,
        '6':6,
        '7':7,
        '8':8,
        '9':9,
        '+':10,
        '-':11
    }
}
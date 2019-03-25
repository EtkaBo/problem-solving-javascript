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

    if(validCharList[str[0]] === undefined) {
        return 0;
    }
    
    for(var i =0; i< str.length; i++) {
        if(validCharList[str[i]] === undefined) {
            break;
        }

        if(str[i] === ' ') {
            continue;
        }

        validString += str[i];
    }
    
    if(+validString > 2147483647) {
        return 2147483647;
    }
    if(+validString < -2147483648) {
        return -2147483648;
    }

    return Number.isNaN(+validString) ? 0 : +validString;
    
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
        '-':11,
        ' ':12
        
    }
}


//"   +0 123"
//this condition fails
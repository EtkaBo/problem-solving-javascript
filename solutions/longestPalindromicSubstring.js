/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let dict = {};

    for(var i = 0; i< s.length; i++) {
        var tempSubStr = '';

        for(var c = i; c < s.length; c++) {

            tempSubStr += s[c];    

            if(isPalindrome(tempSubStr)) {
                dict[i] = tempSubStr;
            }
        }
    }
    let biggestNum = 0;
    let biggestIndex = 0;
    for(var i = 0; i< s.length; i++) {
        let indexsStrValue = dict[i];
        
        if(lengthOfStr(indexsStrValue) > biggestNum) { biggestIndex = i };
        biggestNum = Math.max(biggestNum, lengthOfStr(indexsStrValue));
    }
    return dict[biggestIndex];    
};

var lengthOfStr = function(str) {
    return str.length;
}

var isPalindrome = function(s) {
    var reversedS = '';
    for(var i = s.length - 1; i >= 0; i--) {
        reversedS += s[i];
    }
    return s === reversedS;
}
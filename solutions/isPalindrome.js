//Problem Link:
//https://leetcode.com/problems/palindrome-number


/* ******************Explanation: 
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/



/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    
    let s = x.toString();
    
    let reverseS = '';
    
    for(var i = s.length -1; i > -1; i--) {
        reverseS += s[i]
    }
    
    if(s === reverseS) {
        return true;
    }
    
    return false;
};
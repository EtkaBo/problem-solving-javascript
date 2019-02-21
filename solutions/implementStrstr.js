/**
 * 
 * 
 * Implement strStr().

*Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*
*Example 1:

 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * Example 2:
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 * 
 * 
 *  * Problem Link:
 *  * https://leetcode.com/problems/implement-strstr/submissions/
 *
 *  
*/

/**Brute force solution:
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(needle === '') {
        return 0;
    }
    
    if(needle.length > haystack.length) {
        return -1;
    }
    
    for(var i =0; i< haystack.length; i++) {
        
        var tempI = i;
        
        if(haystack[i] === needle[0]) {
        
            for(var c= 0; c< needle.length; c++) {
                
                if(needle[c] !== haystack[tempI]){
                    break;
                }
                
                if(c === needle.length -1) {
                    return i;
                }
                
                tempI++;
        
            }    
        }
        
        
    }
    
    return -1;
    
};





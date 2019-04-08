/**
 * Problem Link:
 * https://leetcode.com/problems/longest-common-prefix/submissions/
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    var commonPreFix = '';
    
    if(strs[0] === undefined) {return commonPreFix;}
    
    loopParent:
    for(var i =0; i< strs[0].length; i++) {
    
        var currentLetter = strs[0][i];
        
        loopChild:
        for(var c =1;   c< strs.length; c++) {
            
            if(strs[c][i] === currentLetter) {
                continue;
            }
            
            break loopParent;
        }
        commonPreFix += currentLetter;
    }
        return commonPreFix;
};
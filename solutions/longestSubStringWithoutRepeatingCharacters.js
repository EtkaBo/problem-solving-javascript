/** ProblemLink:
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    
    let maxNum = 0;
    
    for(var i = 0; i< s.length; i++) {
        
        //if(maxNum >= )
        
        var dict = {};
        let tempMaxNum = 0;
        
        for(var c = i; c< s.length; c++) {
            if(dict[s[c]] !== undefined) {
                
                maxNum = Math.max(maxNum,tempMaxNum);
                break;
            }
            
            tempMaxNum++;
            dict[s[c]] = s[c];
            
            if(c === s.length -1) {
                maxNum = Math.max(maxNum,tempMaxNum);
            }
            
        }
    }
    
    return maxNum;
}; 
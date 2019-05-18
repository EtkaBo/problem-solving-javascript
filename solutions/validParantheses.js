/**
 * Problem Link:
 * https://leetcode.com/problems/valid-parentheses/
 * 
 * 
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if(s.length % 2 !== 0) { return false;}
    
    let latestParantheses = '';
    
    let stack = [];
    
    for(var i =0; i < s.length; i++) {
        
        
        if(s[i] === ')' || s[i] === ']' || s[i] === '}') { 
        
            if(!isClosingValid(prevParantheses, s[i])) {return false;}
            stack.pop();
            
            prevParantheses = stack[stack.length -1];
        }
        
        else{
            stack.push(s[i]);
            prevParantheses = s[i];
        }
        
    }
    
    if(stack.length > 0) {return false;}
    
    return true;
    
};

var isClosingValid = function(opening,closing) {
    
    if(opening === '(' && closing !== ')') { return false;}
    if(opening === '{' && closing !== '}') { return false;}
    if(opening === '[' && closing !== ']') { return false;}
    return true;
}

//({{}})


//(([][{()}{}])
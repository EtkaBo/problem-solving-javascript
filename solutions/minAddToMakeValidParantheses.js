/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    
  let count = 0;  
  var stack = [];
    
    for(var p in S) {
        
        if(S[p] === ')') {
            
            if(stack.length > 0 &&
                 stack[stack.length -1] === '(' ) {
                
                stack.pop();
            } else { count++; }
            
        }
        else { stack.push(S[p]) }   
    }
    
    
    count += stack.length;

    return count;
};



function minAddToMakeValid2Line(S) {

    while(S.includes('()')) {
        S = S.replace('()', '');
    }
    return S.length;
}

var returnVal = minAddToMakeValid2Line('())))');
console.log(returnVal);
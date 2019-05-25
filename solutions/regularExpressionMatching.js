/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  
    if(p === '.*') {return true;}
    
    let sI = 0;
    let pI = 0;
    while(s[i] || p[i]) {
        
        if(s[i] !== p[i]) {
            
            if(p[pI +1] === '*') {
                pI += 2;
                sI++;
                continue;
            }
            
            else if (p[pI] === '*' && 
                     p[pI -1] === s[sI - 1] &&
                    p[pI-1] !== undefined){
                pI++;
                sI++;
                continue;
            }
            
            else if (p[pI] === '.') {
                pI++;
                sI++;
                continue;
            }
            
             return false;
        }
        
        sI++;
        pI++;
        
    }
    
    return true;
};
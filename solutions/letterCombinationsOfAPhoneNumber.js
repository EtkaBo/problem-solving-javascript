/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(digits === '') {return digits;}
    
    return helper(digits, finishedStrings, '');
};
        
var helper = function(digits, finishedStrings, stringToBuild ) {
    
        let digitStrings = digitStringMapper(digits[0]);
    
    
        for(var i = 0; i < digitStrings.length; i++) {
            
            
            
            let subStringToBuild = stringToBuild + digitStrings[i];
            
            if(digits.length === 1) {
                
                handleSingleDigit(digitStrings, finishedStrings, stringToBuild);
                return finishedStrings;
            }
            else {

                let removeExistingDigit = digits.substring(1, digits.length);
                
                helper(removeExistingDigit,finishedStrings ,subStringToBuild);
                
            }
            
        }
    
    return finishedStrings;
};

var handleSingleDigit = function(digitStrings, finishedStrings, stringToBuild) {
    
    for(var i = 0; i < digitStrings.length; i++) {
        
        finishedStrings.push(stringToBuild + digitStrings[i]);
    }
};
var digitStringMapper = function(digit) {
       
    let mapper = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
        0: ' '
    }
    
    return mapper[digit];
}

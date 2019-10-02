/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  
    return changeRecursive(amount, 0, coins);
    
};

var changeRecursive = function(totalAmount, spentAmount, coins) {
    var result = 0;
    if(spentAmount > totalAmount) {
        return result;
    }
    
    if(spentAmount === totalAmount) {
        return ++result;
    }
    
    
    for(var i =0; i< coins.length; i++) {
        
        var tempSpentAmount = spentAmount;
        tempSpentAmount += coins[i];
        result += changeRecursive(totalAmount, tempSpentAmount,coins);
        
    }
    
    return result;
    
}
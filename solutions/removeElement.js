/**
 * Problem Link:
 * https://leetcode.com/problems/remove-element/submissions/
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    for(var i = 0; i< nums.length; i++) {
        
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }
    }
    
    return nums.length;
    
};


/////without using splice method 
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    debugger;
    let m = 0;    
   for(let i = 0; i < nums.length; i++){
       
       if(nums[i] != val){
           nums[m] = nums[i];
           m++;
       }
   }
   
   return m;
    
};

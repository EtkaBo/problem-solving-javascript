/** THIS PROBLEM HAS NOT SOLVED YET, IT HAS STILL A BUG 
 * Problem Link:
 * https://leetcode.com/problems/3sum/
 * 
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let arToReturn = [];
    var dict = {};
    
    for(var i = 0; i< nums.length; i++)
    {
        if(dict[nums[i]] === undefined){
            dict[nums[i]] = 1;
        } else {
          dict[nums[i]]++;
            
        }
    }
    
    for(var i =0; i< nums.length; i++) {
        
        for(var c = i + 1; c < nums.length; c++ ) {
            
            let numLookingFor = -1 * (nums[i] + nums[c]);
            
            if(dict[numLookingFor] !== undefined &&
              (numLookingFor != nums[i] || dict[numLookingFor] > 1) &&
               (numLookingFor != nums[c] || dict[numLookingFor] > 1))
                {
                    if(isArAlreadyExist(arToReturn, [numLookingFor, nums[i],nums[c]])) {break;}
                 arToReturn.push([numLookingFor, nums[i], nums[c]]);   
                }
        }
    }
    
    
    return arToReturn;
    
};

function isArAlreadyExist(existAr, newAr ) {
    
    let existElementCount = 0;
    for(var i = 0; i< existAr.length; i++) {
        for(var c =0; c < existAr[i].length; i++) {
            
            if(existAr[i].includes(newAr[c])) {
                existElementCount++;
            }
        }

        if(existElementCount === newAr.length) {return true;}

        return false;
        
    }
}

// Given array nums = [-1, 0, 1, 2, -1, -4],
    
// Given array nums = [-1, 0, 1, 2, -1, -4],

//Fails at this case:
// Input
// [-1,0,1,2,-1,-4]
// Output
// [[1,-1,0],[0,-1,1],[-1,-1,2],[2,-1,-1],[-1,0,1],[1,0,-1],[0,1,-1],[-1,2,-1]]
// Expected
// [[-1,-1,2],[-1,0,1]]
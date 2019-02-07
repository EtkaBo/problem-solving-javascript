//Problem link:
//https://leetcode.com/problems/two-sum/submissions/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var dict = {};
    for(var i =0; i < nums.length; i++) {
        
        dict[nums[i]] = i;
    }
    //30: 0
    //55: 1
    //31: 2
    for( var i = 0; i < nums.length; i++) {
        
        let wantedInt = target - nums[i];
        
        if(dict[wantedInt] !== undefined) {
                
                if(i === dict[wantedInt]) {
                    continue;
                }
                return [i, dict[wantedInt]];
            }
        }
        
    }
    
    //-1 , -5 ,-9 , -3 ,1 , 4 ,7 ,4 ,8 ,9 

    
    //-8 + 5= -3
    //-8

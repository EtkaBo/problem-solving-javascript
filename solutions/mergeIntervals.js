/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    let intervalsToReturn = [];
    let mergedIntervals = [];
    
    for(var i =0; i< intervals.length; i++) {
        
        for(var c = i + 1; c< intervals[i].length; c++) {
            
            if((intervals[c][0] >= intervals[i][0] && intervals[c][1] <= intervals[i][0])
                ||
               (intervals[c][0] <= intervals[i][0] && intervals[c][1] >= intervals[i][0])
               ||
               (intervals[c][0] >= intervals[i][1] && intervals[c][1] <= intervals[i][0])
               ||
               (intervals[c][0] <= intervals[i][1] && intervals[c][1] >= intervals[i][0])) {
                
                let values = [];
                values.push(ifMinimumMakePositive(intervals[c][0] - intervals[i][0]));
                values.push(ifMinimumMakePositive(intervals[c][0] - intervals[i][1]));
                values.push(ifMinimumMakePositive(intervals[c][1] - intervals[i][0]));
                values.push(ifMinimumMakePositive(intervals[c][1] - intervals[i][1]));
            
                values.sort((b,a) => (b -a));
                
                
                
                if(values[0] == ifMinimumMakePositive(intervals[c][0] - intervals[i][0])) {
                   intervalsToReturn.push([intervals[c][0], intervals[i][0]])
                   }
                else if(values[0] === ifMinimumMakePositive(intervals[c][0] - intervals[i][1])) {
                   intervalsToReturn.push([intervals[c][0], intervals[i][1]])
                        }
        
                else if(values[0] === ifMinimumMakePositive(intervals[c][1] - intervals[i][0])) {
                   intervalsToReturn.push([intervals[c][1], intervals[i][0]])
                        }
    
                else if(values[0] === ifMinimumMakePositive(intervals[c][1] - intervals[i][1])) {
                   intervalsToReturn.push([intervals[c][1], intervals[i][1]])
                        }

            mergedIntervals.push(i);
            mergedIntervals.push(c);
                
            }
        }
        
        
    for(var i =0; i< intervals.length; i++) {
        
        if(mergedIntervals.includes(i)) {continue;}
        
        intervalsToReturn.push(intervals[i]);
    }
    return intervalsToReturn;
    
    }
};

    var ifMinimumMakePositive = function(num) {
        if(num < 0) {
            num = -1 * num;
        }
        
        return num
    }

//4,1 6,2
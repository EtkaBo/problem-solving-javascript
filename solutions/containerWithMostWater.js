
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    var low = 0;
    var high = height.length -1;
    var maxArea = 0;
    var lastMovedWasLow = false;
    
    while(low < high) {
        var wideness = high - low;
        var heightToCalculate =  Math.min(height[low], height[high]);
    
        maxArea = Math.max(maxArea, wideness * heightToCalculate);
        
        
        if(height[low] < height[high]) {
            
            low++;
            lastMovedWasLow = true;
        }
        
        else if(height[low] > height[high]) {
            high--;
            lastMovedWasLow = false;
        }
        else {
            if(lastMovedWasLow) high--;
            else low++;
        }
        
    }
    
    
    return maxArea;
};


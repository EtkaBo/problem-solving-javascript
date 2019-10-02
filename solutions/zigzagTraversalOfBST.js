/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    
    var node = root;
    var fromLeft = true;
    
    var matrix = [[root.val]];
    var queue = [];
    var printQueue = [];
    var level = 0;
    var powerOf = 0;
    
    while(node !== null) {
    
        if(powerOf === 0) {
            level++
            powerOf = 2 * printQueue.length;
            fromLeft = !fromLeft;
            if(printQueue[0] !== undefined) matrix.unshift(printQueue);
            printQueue = [];
        }
        
        if(fromLeft) {
            if(node.left !== null) {
            queue.unshift(node.left);                                                           printQueue.unshift(node.left.val);
            powerOf--;
            }
            
            //else {powerOf--;}
            
            if(node.right !== null) {
                queue.unshift(node.right);                                                          printQueue.unshift(node.right.val);
                powerOf--;
            }
        
        } 
        else {
            
             if(node.right !== null) {
                 queue.unshift(node.right);
                 printQueue.unshift(node.right.val);
                powerOf--;
             }
            
            //else {powerOf--;}
            
            if(node.left !== null) {
                queue.unshift(node.left);
                printQueue.unshift(node.left.val);
                powerOf--;
            }
    
            //else powerOf--;
        }
        
        node = queue.shift();
        
    }
    
    return matrix;
    
    
};
/**
 * 
 * Problem Link :
 * https://leetcode.com/problems/swap-nodes-in-pairs/submissions/
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    let temp = head;
    
    var i = 0;
    while ( head != null && head.next != null) {
        
        let prevVal = head.val;

        head.val = head.next.val 
        head.next.val = prevVal;
        
        
        head = head.next.next;
            
        
    }

    return temp;
    
};



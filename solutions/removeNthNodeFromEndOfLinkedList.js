/**
 * Problem Link:
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  
    if(n === 1 && head.next === null) {
        return null
    }
    
    let fast = head;
    let slow = head;
    
    while(n > 0) {
        
        fast = fast.next;
        n--;
    }
    
    if(fast === null) {
        return head.next;
    }
    
    let prev = slow;
    
    while(fast != null) {
        
        prev = slow;
        fast = fast.next;
        slow = slow.next;
    }
    
    if(slow.next != null) {
        prev.next = slow.next;
    }
    else {
        prev.next = null;
    }    
    
    return head;
};
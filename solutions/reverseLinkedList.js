/**Problem Link = https://leetcode.com/problems/reverse-linked-list/submissions/
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
var reverseList = function(head) {
    var prev = null;
    var next = null
    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
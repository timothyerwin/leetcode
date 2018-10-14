// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let a1 = [], a2 = [];
    
    let next = l1;
    
    while(next) {
        a1.unshift(next.val);
        
        next = next.next;
    }
    
    next = l2;
    
    while(next) {
        a2.unshift(next.val);
        
        next = next.next;
    }
    
    const max = Math.max(a1.length, a2.length);
    
    a1 = new Array(max - a1.length).fill(0).concat(a1);
    a2 = new Array(max - a2.length).fill(0).concat(a2);
    
    console.log(a1, a2);
    
    const results = [];
    let carry = 0;
    
    for(let i = max -1; i >= 0; i--) {
        let a = a1[i] || 0;
        let b = a2[i] || 0;
        
        let sum = a + b + carry;
        
        results.push(sum % 10);
        carry = Math.trunc(sum / 10);
    }
    
    if(carry) {
        results.push(carry);
    }
    
    let root, node;
    for(let c of results) {
        let next = new ListNode(Number(c));
        
        if(!root) {
            root = node = next;
        } else {
            node.next = next;
            
            node = next;
        }
    }
    
    return root;
};

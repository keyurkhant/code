# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        dummy_node = ListNode(-1, None)
        t1 = l1
        t2 = l2
        curr = dummy_node

        while (t1 or t2):
            sum = carry

            if t1:
                sum += t1.val
            if t2:
                sum += t2.val
            
            next_node = ListNode(sum % 10)
            carry = sum // 10
            
            curr.next = next_node
            curr = curr.next

            if t1:
                t1 = t1.next
            if t2:
                t2 = t2.next            

        if (carry):
            last_node = ListNode(carry, None)
            curr.next = last_node
        
        return dummy_node.next
        











    
## cyclic linked list
## intersecting linked list
[Go back](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/LinkedList.md)

---

#### cyclic linked list / pointers
[141.Linked List Cycle](#leetcode141)

[142.Linked List Cycle](#leetcode-142)

leetcode 287

### intersecting linked list
leetcode 355

leetcode 146--

leetcode 460

leetcode 1206

[160. Intersection of Two Linked Lists](#leetcode-160)

---

### leetcode141
Linked List Cycle
```java
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null) {
            return false;
        }
        ListNode slow = head;
        ListNode fast = head.next;
        while (slow != fast) {
            if (fast == null || fast.next == null) {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return true;
    }
}
```
[[back to list]](#cyclic-linked-list)
### leetcode 142
Linked List Cycle II
```java
public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast. next != null) {
            slow = slow. next;
            fast = fast.next.next;
            if (slow == fast) {// has a loop
                ListNode index1 = fast;
                ListNode index2 = head;
// Two pointers, from the head node and the meeting node, each step until they meet, the meeting point is the ring entrance
                while (index1 != index2) {
                    index1 = index1. next;
                    index2 = index2. next;
                }
                return index1;
            }
        }
        return null;
    }
}
```
[[back to list]](#cyclic-linked-list)
### leetcode 160
Intersection of Two Linked Lists
```java
public class Solution {
     public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
         ListNode curA = headA;
         ListNode curB = headB;
         int lenA = 0, lenB = 0;
         while (curA != null) { // Find the length of linked list A
             lenA++;
             curA = curA. next;
         }
         while (curB != null) { // find the length of linked list B
             lenB++;
             curB = curB. next;
         }
         curA = headA;
         curB = headB;
         // Let curA be the head of the longest linked list, and lenA be its length
         if (lenB > lenA) {
             //1. swap (lenA, lenB);
             int tmpLen = lenA;
             lenA = lenB;
             lenB = tmpLen;
             //2. swap (curA, curB);
             ListNode tmpNode = curA;
             curA = curB;
             curB = tmpNode;
         }
         // find length difference
         int gap = lenA - lenB;
         // Let curA and curB be on the same starting point (the end positions are aligned)
         while (gap-- > 0) {
             curA = curA. next;
         }
         // Traverse curA and curB, return directly if they are the same
         while (curA != null) {
             if (curA == curB) {
                 return curA;
             }
             curA = curA. next;
             curB = curB. next;
         }
         return null;
     }
}
```
[[back to list]](#cyclic-linked-list)
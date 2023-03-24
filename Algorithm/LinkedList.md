## LinkedList

[Back to Catalogue](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/self_study.md)

---
### LeetCode list:
- [Pointer pointing type questions;](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/leetcode/linkedList_ponters.md)
- [Dummy head node;](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/leetcode/linkedList_ponters.md)
- [cyclic linked list;](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/leetcode/cyclicLinkedListAndIntersectingList.md)
- [intersecting linked lists](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/leetcode/cyclicLinkedListAndIntersectingList.md)

---
**Concept:** 
#### Removing elements from a single linkedList
- [delete in the linked-list originally](#delete-in-the-origin-linkedlist)
- [delete in a new dummy node list](#add-a-dummy-head-node)

#### Create LinkedList (CRUD)
- [Create SingleLinked list (CRUD)](#create-a-linkedlist)
- [Create DoubleLinked list (CRUD)](#create-a-double-linked-list)

#### [Swap nodes in linkedList](#swap-nodes-in-linked-list)
#### [Delete the Number N node in the linked list](#delete-the-no-n-node-in-the-linked-list)
#### [two linkedList intersect](#linked-list-intersect)
#### [circular linkedList](#circular-linked-list)


---
#### Removing elements from a single linked list
![img.png](img.png)
(Leetcode 203)
1. Routine to determine node position and then delete
- 1. If you remove the regular intermediate node，where the previous node skips the node to be deleted and points directly to the next node;
- 2. If you are removing the head node, you can point head to head. next and the removal will be completed; 
- 3. In the case of a trailing node, directly null the previous node of the trailing node.

### delete in the origin linkedList
```java
public ListNode removeElements(ListNode head, int val) {
        while(head!=null && head.val==val){
        head = head.next;
        }
        ListNode curr = head;
        while(curr!=null){
        while(curr.next!=null && curr.next.val == val){
        curr.next = curr.next.next;
        }
        curr = curr.next;
        }
        return head;
        }
```

[[back to list]](#linkedlist)

### add a dummy head node
```java
public ListNode removeElements(ListNode head, int val) {
    if (head == null) {
        return head;
    }
    // because maybe to delete the head, so we add a dummy before head
    ListNode dummy = new ListNode(-1, head);
    ListNode pre = dummy;
    ListNode cur = head;
    while (cur != null) {
        if (cur.val == val) {
            pre.next = cur.next;
        } else {
            pre = cur;
        }
        cur = cur.next;
    }
    return dummy.next;
}
```

[[back to list]](#linkedlist)

-------

### create a LinkedList
CRUD of LinkedList
```java

////creat a LinkedList
//1. get(index): Gets the value of the index node in the chain table. If the index is invalid, -1 is returned.
//2. addAtHead(val): adds a node with the value val before the first element of the chain table. After insertion, the new node will become the first node in the chain.
//3. addAtTail(val): appends the node with the value val to the last element of the chain.

//4. addAtIndex(index,val): adds a node with the value val before the index node in the chain table.
//                         If index is equal to the length of the chain table, the node will be appended to the end of the chain table.
//                         If index is greater than the length of the chain table, the node will not be inserted.
//                         If index is less than 0, the node is inserted at the head.

//5. deleteAtIndex(index): if index is valid, the index node in the chain table is deleted.
public class SingleLinkedList {
    class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }
    }

    class MyLinkedList {
        //size store the number of elements of the chain table
        int size;
        //dummy head
        ListNode head;

        //initialize
        public MyLinkedList() {
            size = 0;
            head = new ListNode(0);
        }

        // get the value of the index node, note that the index is from 0, the 0th node is the head node
        public int get(int index) {
            //If index is illegal, return -1
            if (index < 0 || index >= size) {
                return -1;
            }
            ListNode currentNode = head;
            //contains a virtual head node, so look for the index+1st node
            for (int i = 0; i <= index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode.val;
        }

        // insert a node at the top of the chain, equivalent to adding before the 0th element
        public void addAtHead(int val) {
            addAtIndex(0, val);
        }

        // insert a node at the end of the chain table, equivalent to add before the (end + 1) element
        public void addAtTail(int val) {
            addAtIndex(size, val);
        }

        // Insert a new node before the index one, e.g. if index is 0, then the newly inserted node is the new head node of the chain.
        // If index is equal to the length of the chain, then the newly inserted node is the end node of the chain
        // If index is greater than the length of the chain table, then return null
        public void addAtIndex(int index, int val) {
            if (index > size) {
                return;
            }
            if (index < 0) {
                index = 0;
            }
            size++;
            // find the predecessor of the node to be inserted
            ListNode pred = head;
            for (int i = 0; i < index; i++) {
                pred = pred.next;
            }
            ListNode toAdd = new ListNode(val);
            toAdd.next = pred.next;
            pred.next = toAdd;
        }

        //delete the index node
        public void deleteAtIndex(int index) {
            if (index < 0 || index >= size) {
                return;
            }
            size--;
            if (index == 0) {
                head = head.next;
                return;
            }
            ListNode pred = head;
            for (int i = 0; i < index; i++) {
                pred = pred.next;
            }
            pred.next = pred.next.next;
        }
    }
}
```

[[back to list]](#linkedlist)

---

### Create a Double-linked list

CRUD in double-linked list
```java
public class DoubleLinkedlist {
class ListNode {
int val;
ListNode next, prev;

        ListNode() {
        }

        ;

        ListNode(int val) {
            this.val = val;
        }
    }


    class MyLinkedList {

        // Record the number of elements in the linked list
        int size;
        //record the virtual head node and tail node of the linked list
        ListNode head, tail;

        public MyLinkedList() {
            //initialize the operation
            this.size = 0;
            this.head = new ListNode(0);
            this.tail = new ListNode(0);
            //This step is very critical, otherwise there will be null.next error in the operation of joining the head node!!!
            head.next = tail;
            tail.prev = head;
            head.next = tail;
            tail.prev = head;
        }

        public int get(int index) {
            // determine whether index is valid
            if (index < 0 || index >= size) {
                return -1;
            }
            ListNode cur = this.head;
            // determine which side takes less time to traverse
            if (index >= size / 2) {
                //tail starts
                cur = tail;
                for (int i = 0; i < size - index; i++) {
                    cur = cur.prev;
                }
            } else {
                for (int i = 0; i <= index; i++) {
                    cur = cur.next;
                }
            }
            return cur.val;
        }

        public void addAtHead(int val) {
            //equivalent to adding before the 0th element
            addAtIndex(0, val);
        }

        public void addAtTail(int val) {
            //equivalent to adding before the last element (null)
            addAtIndex(size, val);
        }

        public void addAtIndex(int index, int val) {
            //index is greater than the length of the chain
            if (index > size) {
                return;
            }
            //index is less than 0
            if (index < 0) {
                index = 0;
            }
            size++;
            //find the predecessor
            ListNode pre = this.head;
            for (int i = 0; i < index; i++) {
                pre = pre.next;
            }
            //create a new node
            ListNode newNode = new ListNode(val);
            newNode.next = pre.next;
            pre.next.prev = newNode;
            newNode.prev = pre;
            pre.next = newNode;

        }

        public void deleteAtIndex(int index) {
            // determine whether the index is valid
            if (index < 0 || index >= size) {
                return;
            }
            //delete operation
            size--;
            ListNode pre = this.head;
            for (int i = 0; i < index; i++) {
                pre = pre.next;
            }
            pre.next.next.prev = pre;
            pre.next = pre.next.next;
        }
    }
}
```
[[back to list]](#linkedlist)

### Flipping the chain table.
The overall idea, head to tail swapping, pointing from tail to head.

Both double pointers and recursion work out.


### Double pointers 
1. current pointer and pre pointer, convenient for current to point to pre; 
2. we plan for curr and pre to move towards the tail at the same time;
3. but when we assign the head to null, we cannot move the pre and curr then;
4. so we add a temp pointer to record the curr.next ,and give the access for pre and curr moving;


```java
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode cur = head;
        ListNode temp = null;
        while (cur != null) {
            temp = cur.next;// store next of cur, move to next in first
            cur.next = prev;//make one flip next to pre
            prev = cur;//move pre point to cur position
            cur = temp;// move cur to temp, next position
        }
        return prev;
    }
}
```
### Recursion
```java
//S1: front to back
class solution {
    public ListNode reverseList(ListNode head) {
        return reverse(null, head);
    }

    private ListNode reverse(ListNode prev, ListNode cur) {
        if (cur == null) {
            Returns prev;
        }
        ListNode temp = null;
        temp = cur.next;// save the next node first
        cur.next = prev;// reverse
        // update prev, cur position
        // prev = cur;
        // cur = temp;
        return reverse(cur, temp);
    }
}

//S2:  recursive from back to front
class solution {
    ListNode reverseList(ListNode head) {
// Edge condition judgement
        if(head == null) return null;
        if (head.next == null) return head;

        // Called recursively, reversing the chain from the second node onwards
        ListNode last = reverseList(head.next);
        // flip the head node to point to the second node
        head.next.next = head.
                // At this point the head node is the tail node and next needs to point to NULL
                head.next = null;
              //  Returns the last node.
    }
}
```
[[back to list]](#linkedlist)

###  Swap nodes in linked list
The overall idea: exchange, to ensure the position of the exchange node and its target node, and at the same time know the pointer of its previous node; 

(such as 1,2,3,4,5——our operation is, dummyhead== operation Pointer; point to 2, 2 points to 1, 1 points to 3 --- completes the first exchange)
```java
// recursive version
class Solution {
     public ListNode swapPairs(ListNode head) {
         // base case exit submission
         if(head == null || head. next == null) return head;
         // Get the next node of the current node
         ListNode next = head. next;
         // do recursion
         ListNode newNode = swapPairs(next.next);
         // swap here
         next.next = head;
         head.next = newNode;

         return next;
     }
}
```
```java
class Solution {
   public ListNode swapPairs(ListNode head) {
         ListNode dumyhead = new ListNode(-1); // set a dummy head node
         dumyhead.next = head; // Point the virtual head node to head, so that the delete operation will be performed later
         ListNode cur = dumbhead;
         ListNode temp; // Temporary node, save the node after two nodes
         ListNode firstnode; // Temporary node, save the first node of the two nodes
         ListNode secondnode; // Temporary node, save the second node among the two nodes
         while (cur. next != null && cur. next. next != null) {
             temp = cur.next.next.next;
             firstnode = cur.next;
             secondnode = cur.next.next;
             cur.next = secondnode; // Step 1
             secondnode.next = firstnode; // Step 2
             firstnode.next = temp; // Step 3
             cur = firstnode; // cur moves, ready for the next round of exchange
         }
         return dumyhead. next;
     }
}
```
[[back to list]](#linkedlist)

### Delete the No n node in the linked list

Delete the node of the reciprocal No.n in the linked list

1. Find the target node and use the dummy head node;
2. Define the fast pointer and the slow pointer, let the fast pointer move to point n nodes first, and then move the fast and slow pointers at the same time until the fast pointer is empty;
3. The operation pointer needs to point to the previous node of the target node, so that the target node can be skipped when operating next;
```java
public ListNode removeNthFromEnd(ListNode head, int n){
     ListNode dummyNode = new ListNode(0);
     dummyNode. next = head;

     ListNode fastIndex = dummyNode;
     ListNode slowIndex = dummyNode;

     //As long as there is a difference of n nodes between the fast and slow pointers
     for (int i = 0; i < n ; i++){
         fastIndex = fastIndex. next;
     }

     while (fastIndex. next != null){
         fastIndex = fastIndex. next;
         slowIndex = slowIndex. next;
     }

     //At this time, the position of slowIndex is the previous position of the element to be deleted.
     //For the specific situation, you can draw a picture with a linked list length of 3 to simulate the code to understand
     slowIndex.next = slowIndex.next.next;
     return dummyNode. next;
}
```

[[back to list]](#linkedlist)

### linked list intersect
1. To put it simply, it is to find the pointer of the intersection node of the two linked lists. Note that the intersection is not numerical equality, but pointer equality. For the convenience of example, assuming that the values of the node elements are equal, the node pointers are equal.
2. You can compare whether curA and curB are the same. If not, move curA and curB backward at the same time. If curA == curB, find the intersection point. Otherwise the loop exits by returning a null pointer.

```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode curA = headA;
        ListNode curB = headB;
        int lenA = 0, lenB = 0;
        while (curA != null) { // Find the length of linked list A
            lenA++;
            curA = curA.next;
        }
        while (curB != null) { // find the length of linked list B
            lenB++;
            curB = curB.next;
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
            curA = curA.next;
        }
// Traverse curA and curB, return directly if they are the same
        while (curA != null) {
            if (curA == curB) {
                return curA;
            }
            curA = curA.next;
            curB = curB.next;
        }
        return null;
    }
}
```
[[back to list]](#linkedlist)

### circular linked list
#### 1. Determine whether it is a ring;
- 1. Through the fast and slow pointers, if they meet, it means that there is a ring;
- 2. The fast pointer walks two nodes at a time, and the slow pointer walks one node at a time. If there is a ring, the fast pointer approaches the slow pointer by walking one node at a time;

#### 2. Find the entrance of the ring;
- 1. Let X be the start to the entrance, Y be the meeting point from the entrance to the ring, and Z be the distance from the meeting to the leaving the ring;
- 2. When meeting, the slow pointer moves x+y; the fast pointer moves x+y+n(y+z); it means that the fast pointer moves n circles in the ring;
- 3. Because the fast pointer takes one step each time, and the slow pointer takes two steps, it means: 2(x+y)=x+y+n(y+z), that is, x+y=n(y +z), so get x = n(y+z) -y , n>=1; final x = (n-1)(y+z)+z;
- 4. Obtained from the above, n represents the number of turns of the fast pointer when they meet, so assuming n=1, then x=z, indicating that the two pointers must meet at the entrance of the ring,
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
[[back to list]](#linkedlist)


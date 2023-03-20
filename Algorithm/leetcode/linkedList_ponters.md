## Pointer pointing type questions.
## Dummy head node


[Go back](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/LinkedList.md)

---

### Dummy head node

leetcode 2

leetcode 445

leetcode 21

leetcode 23

leetcode 82

leetcode 83

leetcode 86

### Create linked list：

[leetcode 707](#leetcode-707)

---

### delete element
leetcode 92--reverse

[leetcode 203](#leetcode-203)

[leetcode 24](#leetcode-24)

leetcode 25--reverse

leetcode 143

leetcode 328

leetcode 61

leetcode 234

leetcode 147

leetcode 876

leetcode 234

[leetcode 206](#leetcode-206)

[leetcode 19](#leetcode-19)

---

#### leetcode 707
Design Linked List
```java
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
```
[[back to list]](#create-linked-list)

#### leetcode 203
Remove Linked List Elements
```java
// 1. add int the orginal list
class Solution {
    // 1.1 general way use two pointers
    public ListNode removeElements(ListNode head, int val) {
        while (head != null && head. val == val) {
            head = head. next;
        }
        // Already null, exit
        if (head == null) {
            return head;
        }
        // determined current: head.val != val
        ListNode pre = head;
        ListNode cur = head. next;
        while (cur != null) {
            if (cur. val == val) {
                pre.next = cur.next;
            } else {
                pre = cur;
            }
            cur = cur. next;
        }
        return head;
    }
    // 1. 2 use head directly
//    public ListNode removeElements(ListNode head, int val) {
//     while(head!=null && head.val==val){
//         head = head.next;
//     }
//     ListNode curr = head;
//     while(curr!=null){
//         while(curr.next!=null && curr.next.val == val){
//             curr.next = curr.next.next;
//         }
//         curr = curr.next;
//     }
//     return head;
// }

// 2. remove in a dummy head
// public ListNode removeElements(ListNode head, int val) {
//     if (head == null) {
//         return head;
//     }
//     // because may to delete the head, so we add a dummy before head
//     ListNode dummy = new ListNode(-1, head);
//     ListNode pre = dummy;
//     ListNode cur = head;
//     while (cur != null) {
//         if (cur.val == val) {
//             pre.next = cur.next;
//         } else {
//             pre = cur;
//         }
//         cur = cur.next;
//     }
//     return dummy.next;
// }
}
```
[[back to list]](#create-linked-list)


#### leetcode 206
Reverse Linked List
```java
class Solution {
//// 1. two pointers
    // public ListNode reverseList(ListNode head) {
    //     if(head == null || head.next == null) return head;
    //     ListNode pre = null;
    //     ListNode curr =head ;
    //     while(head != null){
    //         curr= head.next;//keep the next in first
    //         head.next = pre;
    //         pre =head;
    //         head =curr;
    //     }
    //     return pre;
    // }

// 2. recursion front to end
     public ListNode reverseList(ListNode head) {
        return reverse(null, head);
    }
    private ListNode reverse(ListNode prev, ListNode cur) {
        if (cur == null) {
            return prev;
        }
        ListNode temp = null;
        temp = cur.next;// store the next in first, keep the access
        cur.next = prev;// flip
        // update prev、cur position
        // prev = cur;
        // cur = temp;
        return reverse(cur, temp);
    }
    
// // 3. recurse from back to front
//      ListNode reverseList(ListNode head) {
//          // Edge condition judgment
//          if(head == null) return null;
//          if (head. next == null) return head;
        
//          // Recursive call, flip the linked list starting from the second node
//          ListNode last = reverseList(head. next);
//          // Flip the pointing of the head node and the second node
//          head.next.next = head;
//          // At this time, the head node is the tail node, and next needs to point to NULL
//          head. next = null;
//          return last;
//      }


// //4.  Iteration method: add a dummy head node, and use the head method to realize the linked list flip
//     public static ListNode reverseList(ListNode head) {
//         // Create dummy head node
//         ListNode dumpyHead = new ListNode(-1);
//         dumpyHead. next = null;
//         // traverse all nodes
//         ListNode cur = head;
//         while(cur != null){
//             ListNode temp = cur. next;
//             // header interpolation
//             cur.next = dumpyHead.next;
//             dumpyHead.next = cur;
//             cur = temp;
//         }
//         return dumpyHead. next;
//     }

// //5. push all nodes into the stack
// //Then create a dummy head node, let cur point to dummy. Then start looping out of the stack, every time an element comes out, add it to the linked list with the dummy head node as the head node, and finally return.
// public ListNode reverseList(ListNode head) {
//      // If the linked list is empty, return empty
//      if (head == null) return null;
//      // If there is only one element in the linked list, return directly
//      if (head. next == null) return head;
//      // Create a stack and each node is pushed into the stack
//      Stack<ListNode> stack = new Stack<>();
//      ListNode cur = head;
//      while (cur != null) {
//          stack.push(cur);
//          cur = cur. next;
//      }
//      // Create a dummy head node
//      ListNode pHead = new ListNode(0);
//      cur = pHead;
//      while (!stack. isEmpty()) {
//          ListNode node = stack. pop();
//          cur.next = node;
//          cur = cur. next;
//      }
//      // The next of the last element should be assigned a value of empty
//      cur.next = null;
//      return pHead.next;
// }
}
```
[[back to list]](#create-linked-list)

#### leetcode 19
Remove Nth Node From End of List
```java
class Solution {
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
}
```
[[back to list]](#create-linked-list)

#### leetcode 24
Swap Nodes in Pairs
```java

class Solution {
    //1. recursive version
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


////2. set a dummy head node
//  public ListNode swapPairs(ListNode head) {
//          ListNode dumyhead = new ListNode(-1); 
// // Point the dumyhead node to head, so that the delete operation will be performed later
//          dumyhead.next = head; 
//          ListNode cur = dumyhead;
//          ListNode temp; // Temporary node, save the node after two nodes
//          ListNode firstnode; // Temporary node, save the first node of the two nodes
//          ListNode secondnode; // Temporary node, save the second node among the two nodes
//          while (cur. next != null && cur. next. next != null) {
//              temp = cur.next.next.next;
//              firstnode = cur.next;
//              secondnode = cur.next.next;
//              cur.next = secondnode; // Step 1
//              secondnode.next = firstnode; // Step 2
//              firstnode.next = temp; // Step 3
//              cur = firstnode; // cur moves, ready for the next round of exchange
//          }
//          return dumyhead. next;
//      }
}
```
[[back to list]](#create-linked-list)



## Pointer pointing type questions.
## Dummy head node


[Go back](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/LinkedList.md)

---

### Dummy head node

leetcode 445

[21.Merge Two Sorted Lists](#leetcode-21)

[23.Merge k Sorted Lists](#leetcode-23)

leetcode 82

leetcode 83

leetcode 86

### Create linked list：

[707.Design Linked List](#leetcode-707)

---
### delete element/ pointers

[2.Add Two Numbers](#leetcode-2)

leetcode 92--reverse

[203.Remove Linked List Elements](#leetcode-203)

[24.Swap Nodes in Pairs](#leetcode-24)

leetcode 25--reverse

[143. Reorder List](#leetcode-143)

leetcode 328

leetcode 61

[234. Palindrome Linked List](#leetcode-234)

leetcode 147

leetcode 876

leetcode 234

[206.Reverse Linked List](#leetcode-206)

[19.Remove Nth Node From End of List](#leetcode-19)

---
#### leetcode 2
Add Two Numbers
```java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    if(l1==null){
        return l2;
    }if(l2==null){
        return l1;
    }
// res for store result and point for loop
    ListNode res=new ListNode(-1);
    ListNode point=new ListNode(l1.val+l2.val);
    res.next=point;
  //  point.next points to the new
    point.next=addTwoNumbers(l1.next,l2.next);
   return update(res.next);
    }
    private ListNode update(ListNode obj){
    ListNode res = new ListNode(-1,obj);
     while(obj.next!=null){
         if(obj.val>=10){
             obj.val-=10;
             obj.next.val+=1;
         }
         obj=obj.next;
     }
// if over ten 
// old node -10，new a node，value is 1，next null
     if(obj.val>=10){
         obj.val-=10;
         obj.next = new ListNode(1,null);
     }
     return res.next;
    } 
}
```
[[back to list]](#create-linked-list)

#### leetcode 21
Merge Two Sorted Lists
```java
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) {
            return l2;
        }
        else if (l2 == null) {
            return l1;
        }
        else if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        }
        else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
}
```
[[back to list]](#create-linked-list)
#### leetcode 23
Merge k Sorted Lists
```java

class Solution {
//     public ListNode mergeKLists(ListNode[] lists) {
// //1.  dummyhead  but nest loop is really bad solution
//         int k = lists.length;
//         ListNode dummyHead = new ListNode(0);
//         ListNode tail = dummyHead;
//         while (true) {
//             ListNode minNode = null;
//             int minPointer = -1;
//             for (int i = 0; i < k; i++) {
//                 if (lists[i] == null) {
//                     continue;
//                 }
//                 if (minNode == null || lists[i].val < minNode.val) {
//                     minNode = lists[i];
//                     minPointer = i;
//                 }
//             }
//             if (minPointer == -1) {
//                 break;
//             }
//             tail.next = minNode;
//             tail = tail.next;
//             lists[minPointer] = lists[minPointer].next;
//         }
//         return dummyHead.next;
//     }

//    public ListNode mergeKLists(ListNode[] lists) {
// //2. pointers lopp seperately
//         Queue<ListNode> pq = new PriorityQueue<>((v1, v2) -> v1.val - v2.val);
//         for (ListNode node: lists) {
//             if (node != null) {
//                 pq.offer(node);
//             }
//         }
//         ListNode dummyHead = new ListNode(0);
//         ListNode tail = dummyHead;
//         while (!pq.isEmpty()) {
//             ListNode minNode = pq.poll();
//             tail.next = minNode;
//             tail = minNode;
//             if (minNode.next != null) {
//                 pq.offer(minNode.next);
//             }
//         }
//         return dummyHead.next;
//     }
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) {
            return null;
        }
        return merge(lists, 0, lists.length - 1);
    }
    private ListNode merge(ListNode[] lists, int lo, int hi) {
        if (lo == hi) {
            return lists[lo];
        }
        int mid = lo + (hi - lo) / 2;
        ListNode l1 = merge(lists, lo, mid);
        ListNode l2 = merge(lists, mid + 1, hi);
        return merge2Lists(l1, l2);
    }
    // 3. recursion and add one by one
    private ListNode merge2Lists(ListNode l1, ListNode l2) {
        if (l1 == null) {
            return l2;
        }
        if (l2 == null) {
            return l1;
        }
        if (l1.val < l2.val) {
            l1.next = merge2Lists(l1.next, l2);
            return l1;
        }
        l2.next = merge2Lists(l1, l2.next);
        return l2;
    }
}    
```
[[back to list]](#create-linked-list)
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

### leetcode 234
Palindrome Linked List
```java

// method one, use an array
// class Solution {
//      public boolean isPalindrome(ListNode head) {
//          int len = 0;
//          // Count the length of the linked list
//          ListNode cur = head;
//          while (cur != null) {
//              len++;
//              cur = cur. next;
//          }
//          cur = head;
//          int[] res = new int[len];
//          // add elements to the array
//          for (int i = 0; i < res. length; i++){
//              res[i] = cur.val;
//              cur = cur. next;
//          }
//          // compare palindrome
//          for (int i = 0, j = len - 1; i < j; i++, j--){
//              if (res[i] != res[j]){
//                  return false;
//              }
//          }
//          return true;
//      }
// }

// Method 2, fast and slow pointer
class Solution {
     public boolean isPalindrome(ListNode head) {
         // Return true if empty or only one node
         if (head == null && head. next == null) return true;
         ListNode slow = head;
         ListNode fast = head;
         ListNode pre = head;
         while (fast != null && fast. next != null){
             pre = slow; // record the previous node of slow
             slow = slow. next;
             fast = fast.next.next;
         }
         pre.next = null; // Split two linked lists

         // first half
         ListNode cur1 = head;
         // Second half. Here the reverse linked list is used
         ListNode cur2 = reverseList(slow);

         while (cur1 != null){
             if (cur1.val != cur2.val) return false;

             // Note that two nodes need to be moved
             cur1 = cur1. next;
             cur2 = cur2.next;
         }
         return true;
     }
     ListNode reverseList(ListNode head){
         // reverse linked list
         ListNode tmp = null;
         ListNode pre = null;
         while (head != null){
             tmp = head. next;
             head.next = pre;
             pre = head;
             head = tmp;
         }
         return pre;
     }
}
```
[[back to list]](#create-linked-list)

### leetcode 143
Reorder List
```java
// // Method 1 Java implementation, using an array to store nodes
//   class Solution {
//      public void reorderList(ListNode head) {
//          // Double pointer approach
//          ListNode cur = head;
//          // The bottom layer of ArrayList is an array, which can be accessed randomly using subscripts
//          List<ListNode> list = new ArrayList<>();
//          while (cur != null){
//              list.add(cur);
//              cur = cur. next;
//          }
//          cur = head; // return to the head
//          int l = 1, r = list.size() - 1; // Note that the left side starts from 1
//          int count = 0;
//          while (l <= r){
//              if (count % 2 == 0){
//                  // even number
//                  cur.next = list.get(r);
//                  r--;
//              } else {
//                  // odd number
//                  cur.next = list.get(l);
//                  l++;
//              }
//              // Every time the pointer needs to be moved
//              cur = cur. next;
//              count++;
//          }
//          // Pay attention to the end of the wave
//          cur.next = null;
//      }
// }
// Method 2: Use a double-ended queue to simplify the operation of the array, and the code is more concise than the former (avoid some boundary conditions)
// class Solution {
//      public void reorderList(ListNode head) {
//          // Use double-ended queue method to solve
//          Deque<ListNode> de = new LinkedList<>();
//          // Here is the next node to take the head, the head does not need to enter the queue again, to avoid duplication
//          ListNode cur = head. next;
//          while (cur != null){
//              de.offer(cur);
//              cur = cur. next;
//          }
//          cur = head; // go back to the head

//          int count = 0;
//          while (!de.isEmpty()){
//              if (count % 2 == 0){
//                  // Even number, take out the value at the right end of the queue
//                  cur.next = de.pollLast();
//              } else {
//                  // Odd number, take out the value at the left head of the queue
//                  cur.next = de.poll();
//              }
//              cur = cur. next;
//              count++;
//          }
//          cur.next = null;
//      }
// }

// method three
class Solution {
     public void reorderList(ListNode head) {
         ListNode fast = head, slow = head;
         //Find the midpoint
         while (fast. next != null && fast. next. next != null) {
             slow = slow. next;
             fast = fast.next.next;
         }
         //right is the right half 12345 is 45 1234 is 34
         ListNode right = slow. next;
         // disconnect the left part and the right part
         slow. next = null;
         //Reverse the right part right is the starting point of the reversed right part
         right = reverseList(right);
         //Start of the left part
         ListNode left = head;
         // Connect the left and right parts back and forth
         //The number of nodes in the left part must be greater than or equal to the number of nodes in the right part, so only judge right
         while (right != null) {
             ListNode curLeft = left. next;
             left. next = right;
             left = curLeft;

             ListNode curRight = right. next;
             right. next = left;
             right = curRight;
         }
     }
     public ListNode reverseList(ListNode head) {
         ListNode headNode = new ListNode(0);
         ListNode cur = head;
         ListNode next = null;
         while (cur != null) {
             next = cur. next;
             cur.next = headNode.next;
             headNode. next = cur;
             cur = next;
         }
         return headNode. next;
     }
}
```
[[back to list]](#create-linked-list)



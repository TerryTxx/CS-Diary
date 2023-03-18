## LinkedList

[Back to Catalogue](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/self_study.md)

---

### Removing elements from a single linkedList
- [delete in the linked-list originally](#delete-in-the-origin-linkedlist)
- [delete in a new dummy node list](#add-a-dummy-head-node)

### Create LinkedList (CRUD)
- [Create SingleLinked list (CRUD)](#create-a-linkedlist)
- [Create DoubleLinked list (CRUD)](#create-a-double-linked-list)



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
  if(head != null && head.val != val){//if null, no need to delete
        head = head.next;
        
        cur = head; // to find the head before curr, the pointer
                    // curr point curr.next.next
        while(cur != null && cur.next != null){//loop to find
            if(cur.next.val == target){
                cur.next = cur.next.next;//find target and its prev point to its next and skip it
            }else{
               cur = cur.next // not find , point to the next
             }   
        }return head;
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
2. You can create a virtual head node, dummyHead, and then delete any element, which can follow uniform rules and does not require prior judgement
```java
public ListNode removeElements(ListNode head, int val) {
    if (head == null) {
        return head;
    }
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







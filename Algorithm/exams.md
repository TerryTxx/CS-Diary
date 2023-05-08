## List of labs

------
### 链表：押题-翻转链表
- [Lab1 + LAB2 + LAB3](#lab01)
- 考核单双链表的CRUD，以及查找位置打印
```
建议画链表，然后通过双指针理解数据变化，转成递归无非是条件语句作为拦截语句；
模拟卷有一道翻转双链表，已经写在考点三
```
--------
### 树：押题-AVL树
- [Lab4](#lab04)


----

### LAB01
1. 考点1：创建一个链表（单/双）
```
了解单双链表的增删改查：
```
- 基本代码：单链表CRUD
```java
public class LinkedList {
    Node head;
    public LinkedList() {
        head = null;
    }
    public void addNode(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    public void deleteNode(int data) {
        if (head == null) {
            return;
        }
        if (head.data == data) {
            head = head.next;
            return;
        }
        Node current = head;
        while (current.next != null) {
            if (current.next.data == data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
    public void updateNode(int data, int newData) {
        if (head == null) {
            return;
        }
        Node current = head;
        while (current != null) {
            if (current.data == data) {
                current.data = newData;
                return;
            }
            current = current.next;
        }
    }
    public void printLinkedList() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
    }
}

```
- 基本代码：双链表CRUD
```java
public class DoublyLinkedList {
    Node head;

    public DoublyLinkedList() {
        head = null;
    }
    public void addNode(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }
    public void deleteNode(int data) {
        if (head == null) {
            return;
        }
        if (head.data == data) {
            head = head.next;
            head.prev = null;
            return;
        }
        Node current = head;
        while (current.next != null) {
            if (current.next.data == data) {
                current.next = current.next.next;
                if (current.next != null) {
                    current.next.prev = current;
                }
                return;
            }
            current = current.next;
        }
    }
    public void updateNode(int data, int newData) {
        if (head == null) {
            return;
        }
        Node current = head;
        while (current != null) {
            if (current.data == data) {
                current.data = newData;
                return;
            }
            current = current.next;
        }
    }
    public void printLinkedList() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
    }
}
```
### LAB02
2. 考点2：打印倒数第二（N）个节点;（即再往后的第二个指针指向null）
- 基本代码--使用递归
```java
class print {
    public void printSecondLastNode() {
        if (head == null || head.next == null) {
            System.out.println("链表为空或者只有一个节点！");
            return;
        }
        Node node = getSecondLastNode(head);
        System.out.println("倒数第二个节点的值为：" + node.data);
    }
    private Node getSecondLastNode(Node node) {
        if (node.next == null || node.next.next == null) {
            return node;
        }
        return getSecondLastNode(node.next);
    }
}
```

LAB03 -- 都是单双链表的查+改组合
3. 考点3 ： 反转链表
```java
class doubllist {
    public static Node reverse(Node head) {
        // 基本情况：链表为空或者只有一个节点
        if (head == null || head.next == null) {
            return head;
        }
        // 递归情况：翻转剩余部分的链表，然后交换当前节点的前驱和后继指针
        Node newHead = reverse(head.next);
        head.next.next = head.prev; // 交换当前节点的前驱和后继指针
        head.prev = head.next;
        head.next = null;
// 如果翻转单链表        
//        Node newHead = reverse(head.next);
//        head.next.next = head;
//        head.next = null;
        
        return newHead;
    }
}
```
链表结束
[返回目录](#list-of-labs)
----

### LAB04
1. 考点1：交换子节点+打印子节点：
```java

```
### LAB05

### LAB06
### LAB07
### LAB08
### LAB09
### LAB10
### LAB11


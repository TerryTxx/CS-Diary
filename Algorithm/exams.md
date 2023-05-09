## List of labs

------

### 链表：押题-翻转链表
- [翻转链表](#reverse-linkedlist-by-recursion)
- [Lab1 + LAB2 + LAB3](#lab01)
- 考核单双链表的CRUD，以及查找位置打印

```
建议画链表，然后通过双指针理解数据变化，转成递归无非是条件语句作为停止递归的拦截语句；
模拟卷有一道翻转双链表，已经写在考点三
```

--------

### 树：押题-AVL树
- [AVL树](#avl-tree)
- [遍历树](#tree-trevesal)
- [Lab4](#lab04)
- [Lab5](#lab05)
- [Lab6](#lab06)
```html
二叉树的概念：
1. 普通二叉树 (Binary Tree)：空的，或者右左的

*2. 完全二叉树 (Complete Binary Tree): 
是一种特殊的二叉树，除了最后一层节点可能没有填满外，其余层节点都必须填满，且最后一层节点都靠左对齐(底部左边开始连续的)。

*3. 满二叉树 (Full Binary Tree): 
是一种特殊的二叉树，每个节点都有两个子节点，除了叶子节点之外没有其他空缺节点。

*4. 二叉搜索树 (Binary Search Tree): （所有左边小于中间，右边大于中间）
是一种特殊的二叉树，左子树中的所有节点的值都小于它的根节点的值，
右子树中的所有节点的值都大于它的根节点的值。
这使得查找、插入和删除等操作的时间复杂度都可以达到 O(log n)

*5. 平衡二叉搜索树 (Balanced Binary Tree): map的底层实现就是avl；order map底层是哈希表
---AVL tree（即满足二叉搜索树，同时所有左右子树高度差不大于1）
是一种特殊的二叉树，左子树中的所有节点的值都小于它的根节点的值，
右子树中的所有节点的值都大于它的根节点的值。
这使得查找、插入和删除等操作的时间复杂度都可以达到 O(log n)

6. 红黑树 (Red-Black Tree):
7. B树 (B-Tree):
8. B+树 (B+ Tree): 
```


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
### reverse linkedlist by recursion
```java
class doubllist {
    public static Node reverse(Node head) {
        if (head == null || head.next == null) {
            return head;
        }

        Node newHead = reverse(head.next);
//翻转双链表
        head.next.prev = head.next.next; // Update the prev pointer of the next node
        head.next.next = head; // Update the next pointer of the current node
        head.prev = head.next; // Update the prev pointer of the current node
        head.next = null; // Set the next pointer of the current node to null
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
class list {
    public void swapChildren(Position<E> p) throws IllegalArgumentException, NullPointerException {
        Node<E> node = validate(p);
        Node<E> leftChild = node.getLeft();
        Node<E> rightChild = node.getRight();
        if (leftChild == null && rightChild == null) {
            throw new IllegalArgumentException("The node has no children.");
        } else if (leftChild == null) {
            node.setLeft(rightChild);//right to the null left
            rightChild.setParent(node);// move the base node
            node.setRight(null);// set the right null
        } else if (rightChild == null) {//opposite than above
            node.setRight(leftChild);
            leftChild.setParent(node);
            node.setLeft(null);
        } else {//if we have element of both side
            node.setLeft(rightChild);
            rightChild.setParent(node);
            node.setRight(leftChild);
            leftChild.setParent(node);
        }
    }

    public static <E> void printChildren(BinaryTree<E> tree, Position<E> p) throws NullPointerException {
        System.out.println("The left child of " + p.getElement() + " is: " + tree.left(p).getElement());
        System.out.println("The right child of " + p.getElement() + " is: " + tree.right(p).getElement());
    }
}
```
### LAB05
2. 考点2：计算路径
```java
class list {
    public int countExternalNodes() {
        return countExternalNodes(root());
    }

    private int countExternalNodes(Position<E> p) {
        if (isExternal(p)) {
            return 1;
        }
        int count = 0;
        if (left(p) != null) {
            count += countExternalNodes(left(p));
        }
        if (right(p) != null) {
            count += countExternalNodes(right(p));
        }
        return count;
    }

    public int pathLength() {
        return pathLength(root(), 0);
    }

    private int pathLength(Position<E> p, int depth) {
        if (isExternal(p)) {
            return depth;
        }
        int pathLength = 0;
        if (left(p) != null) {
            pathLength += pathLength(left(p), depth + 1);
        }
        if (right(p) != null) {
            pathLength += pathLength(right(p), depth + 1);
        }
        return pathLength + depth;
    }
}
```
3. 考点3：计算最大深度
```java
class solution {
    /**
     * 递归法
     */
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftDepth = maxDepth(root.left);
        int rightDepth = maxDepth(root.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}
```
最小深度
```java
class Solution {
    /**
     * 递归法，相比求MaxDepth要复杂点
     * 因为最小深度是从根节点到最近**叶子节点**的最短路径上的节点数量
     */
    public int minDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftDepth = minDepth(root.left);
        int rightDepth = minDepth(root.right);
        if (root.left == null) {
            return rightDepth + 1;
        }
        if (root.right == null) {
            return leftDepth + 1;
        }
        // 左右结点都不为null
        return Math.min(leftDepth, rightDepth) + 1;
    }
}
```
节点个数
```java
class Solution {
    // 通用递归解法
    public int countNodes(TreeNode root) {
        if(root == null) {
            return 0;
        }
        return countNodes(root.left) + countNodes(root.right) + 1;
    }
}
```
### AVL tree：
- 考点：将有序数组变成AVL树
- 验证二叉搜索树
```java
class Solution {//代码验证二叉搜索树
    // 递归
    TreeNode max;
    public boolean isValidBST(TreeNode root) {
        if (root == null) {
            return true;
        }// 左
        boolean left = isValidBST(root.left);
        if (!left) {
            return false;
        }// 中
        if (max != null && root.val <= max.val) {
            return false;
        }
        max = root;// 右
        boolean right = isValidBST(root.right);
        return right;
    }
}
```
---
```text
Given an empty AVL tree, show how the tree is updated after inserting each value listed below.
12, 9, 8, 7, 5, 4, 1
```
分析：
```text
1. 如果链式存储表示二叉搜索树：
    1-4-5-7-8-9-12（右子树大于中间节点）--但不平衡（与题目无关，只是告诉你为什么要平衡）
2. 找到中间数，左边小，右边大（先找中间再找两遍）
          7
       /     \
      4       9
     / \     / \
   1    5    8   12
```
代码实现：
```java
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return sortedArrayToBST(nums, 0, nums.length);
    }
    public TreeNode sortedArrayToBST(int[] nums, int left, int right) {
        if (left >= right) {
            return null;
        }
        if (right - left == 1) {
            return new TreeNode(nums[left]);
        }
        int mid = left + (right - left) / 2;
        TreeNode root = new TreeNode(nums[mid]);
        root.left = sortedArrayToBST(nums, left, mid);
        root.right = sortedArrayToBST(nums, mid + 1, right);
        return root;
    }
}
```
### tree trevesal：
- 深度优先搜索:DFS（递归）
- 包括：前序preorder/中序inorder/后序postorder遍历
```java
class tretree {
    //1. generally RootNode and Array; return void as paramater is in funcion already
    public void preorder(TreeNode root, List<Integer> result) {
//2.  stop the recursion as root is null
        if (root == null) {
            return;
        }
//3.1. middle, left,  right
        result.add(root.val);//middle******
        preorder(root.left, result);//left
        preorder(root.right, result);//right
//3.2. left, middle,  right
    inorder(root.left, result);
        result.add(root.val);//******
    inorder(root.right, result);
//3.3.  left,  right,  middle
    postorder(root.left, result);
    postorder(root.right, result);
   result.add(root.val);//*******
  }
}
```
- 广度优先搜索:BFS--应该不会考，考到活该~
```java
class tree{
 public void checkFun02(TreeNode node) {
     if (node == null) return;
     Queue<TreeNode> que = new LinkedList<TreeNode>();
     que.offer(node);
     while (!que.isEmpty()) {
         List<Integer> itemList = new ArrayList<Integer>();
         int len = que.size();
         while (len > 0) {
             TreeNode tmpNode = que.poll();
             itemList.add(tmpNode.val);

             if (tmpNode.left != null) que.offer(tmpNode.left);
             if (tmpNode.right != null) que.offer(tmpNode.right);
             len--;
         }
         resList.add(itemList);
     }
 }}
```
### LAB07

### LAB08

### LAB09

### LAB10

### LAB11


## List of labs

------

### 链表：
- 模拟卷：翻转链表
- [翻转链表](#reverse-linkedlist-by-recursion)
- [Lab1 + LAB2 + LAB3](#lab01)
- 考核单双链表的CRUD，以及查找位置打印

```
建议画链表，然后通过双指针理解数据变化，转成递归无非是条件语句作为停止递归的拦截语句；
模拟卷有一道翻转双链表，已经写在考点三
```

--------

### 树：
- 模拟卷-AVL树
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
### 优先队列和堆--lab7
不知道要考什么
### 哈希表和哈希冲突--lab8
- 模拟卷：用线性探测法处理冲突，并绘制哈希表 ：附加拉链探测和平方探测
```text
Draw the 11-entry hash table that results from using the hash function, h(i) = (3i+5) mod 11, to hash the
keys 12, 44, 13, 88, 23, 94, 11, 39, 20, 16, and 5, assuming collisions are handled by linear probing?
```
[代码实现](#lab08)
```
1. mod多少，就有多少个位（add），从0开始计数；
2. 方法分为：开放地址--线性探测和平方探测；拉链法
3. 通过计算得到每一个key的add（add=余数），然后按次序填写
---线性探测，按照数列顺序依次排入表格，如果被占用，就向后占位，直到有空位
---平方探测：1的二次方，向前看一位，﹣1的二次方，向后看一位，2的平方向前看4位，-2..向后四位，3..9位，直到找到空位
---拉链法：参考下表，竖过来，key变成带指向的链表，就是拉链   
```
以下只是思路，不是结果：

|  | d： | 0   | 1 | 2   | 3   | 4   | 5   | 6 | 7 | 8   | 9   | 10  |
 |----|-----|-----|---|-----|-----|-----|---|---|-----|-----|-----|----|
|  | Key | 13  |   |     | 88  | 44  | 11  |   |   | 12  | 23  | 20  |
|  |    |     |   |     |     | 94  |     |   |   |     | 5   | 16  |
|  | hash | 1   |   |     | 1   | 2   | 1   |   |   | 1   | 2   | 2   |

### [动态背包--lab9](#lab09)

### 图论问题，BFS&DFS(搭配G图)--lab10
- 模拟卷：画大G图，并分析使用BFS和DFS怎么操作
```text
Let G be an undirected graph whose vertices are the integers 1 through 8, and let the adjacent vertices of
each vertex be given by the table below:
vertex adjacent vertices
1 (2, 3, 4)
2 (1, 3, 4)
3 (1, 2, 4)
4 (1, 2, 3, 6)
5 (6, 7, 8)
6 (4, 5, 7)
7 (5, 6, 8)
8 (5, 7)
Assume that, in a traversal of G, the adjacent vertices of a given vertex are returned in the same order as
they are listed in the table above.
a. Draw G.
b. Give the sequence of vertices of G visited using a DFS traversal starting at vertex 1.
c. Give the sequence of vertices visited using a BFS traversal starting at vertex1.
```
![Screenshot 2023-05-10 at 15.05.49.png](Screenshot%202023-05-10%20at%2015.05.49.png)
- dfs可以理解为树的前序遍历（其他两种序遍历也是dfs）
![Screenshot 2023-05-10 at 14.51.49.png](Screenshot%202023-05-10%20at%2014.51.49.png)


### Dijkstra算法找最小路径--lab11
![Screenshot 2023-05-10 at 15.37.04.png](Screenshot%202023-05-10%20at%2015.37.04.png)
![Screenshot 2023-05-10 at 15.54.48.png](Screenshot%202023-05-10%20at%2015.54.48.png)

### huffman tree
- 构造哈夫曼树
```
1. 先排序：5，8，14，23，24，26
2. 找出两个最小的序号
3. 将选出的两个数从序列中删除，并将两数和放入数列
S1:5+8,-->13
   13,14,23,24,26
S2:13+14-->27
    23,24,26,27
S3:23+24-->47
    26,27,47
S4:26+27-->53
    47,53
S5: 47+53-->100;

然后开始使用每一步的第一行构造huffman树
           (100)
         0/1    0\1
        (53)      (47)
      0/1  0\1   0/1  0\1
     (27)   26   23    24
   0/1   0\1
  (13)     14
 0/1 0\1
 5     8
  
 哈夫曼编码：左0右1
  5:0000
  8:0001
  14:001.....
```

### 贪心

### 快速排序
理解左右指针，从最左边找轴点，判断左右指针的值，交换后轴点还是不动，换另一个指针逼近

---------

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
[返回目录](#list-of-labs)

### LAB07
```java
class main{
    public static void main(String[] args) {
        HeapPriorityQueue<Integer, String> pq01 = new HeapPriorityQueue<>();
        Integer[] nums = {10, 6, 2, 8, 5, 12, 20, 18, 19};
        for (Integer num : nums) {
            pq01.insert(num, num.toString());
        }
        while (!pq01.isEmpty()) {
            Entry<Integer, String> entry = pq01.removeMin();
            System.out.print(entry.getValue() + " ");//2 5 6 8 10 12 18 19 20
        }
    }
}
```
### LAB08
```java
public class LinearProbingHash {
    private int[] table;

    public LinearProbingHash() {
        table = new int[11];
    }

    private int hashFunc(int key) {
        return (3 * key + 5) % 11;
    }

    public void insert(int key) {
        int index = hashFunc(key);
        if (table[index] == 0) {
            table[index] = key;
        } else {
            while (table[index] != 0) {
                index = (index + 1) % 11;
            }
            table[index] = key;
        }
    }

    public void printTable() {
        for (int i = 0; i < table.length; i++) {
            System.out.println("Index " + i + ": " + table[i]);
        }
    }

    public static void main(String[] args) {
        LinearProbingHash hashTable = new LinearProbingHash();
        int[] keys = {12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5};
        for (int key : keys) {
            hashTable.insert(key);
        }
        hashTable.printTable();
    }
}

```
[返回目录](#list-of-labs)
### LAB09
```java
public class BagProblem {
    public static void main(String[] args) {
        int[] weight = {1,3,4};
        int[] value = {15,20,30};
        int bagSize = 4;
        testWeightBagProblem(weight,value,bagSize);
    }

    /**
     * 动态规划获得结果
     * @param weight  物品的重量
     * @param value   物品的价值
     * @param bagSize 背包的容量
     */
    public static void testWeightBagProblem(int[] weight, int[] value, int bagSize){

        // 创建dp数组
        int goods = weight.length;  // 获取物品的数量
        int[][] dp = new int[goods][bagSize + 1];

        // 初始化dp数组
        // 创建数组后，其中默认的值就是0
        for (int j = weight[0]; j <= bagSize; j++) {
            dp[0][j] = value[0];
        }
        // 填充dp数组
        for (int i = 1; i < weight.length; i++) {
            for (int j = 1; j <= bagSize; j++) {
                if (j < weight[i]) {
                    /**
                     * 当前背包的容量都没有当前物品i大的时候，是不放物品i的
                     * 那么前i-1个物品能放下的最大价值就是当前情况的最大价值
                     */
                    dp[i][j] = dp[i-1][j];
                } else {
                    /**
                     * 当前背包的容量可以放下物品i
                     * 那么此时分两种情况：
                     *    1、不放物品i
                     *    2、放物品i
                     * 比较这两种情况下，哪种背包中物品的最大价值最大
                     */
                    dp[i][j] = Math.max(dp[i-1][j] , dp[i-1][j-weight[i]] + value[i]);
                }
            }
        }
        // 打印dp数组
        for (int i = 0; i < goods; i++) {
            for (int j = 0; j <= bagSize; j++) {
                System.out.print(dp[i][j] + "\t");
            }
            System.out.println("\n");
        }
    }
}
```
```java
class main{
    public static void main(String[] args) {
        int[] weight = {1, 3, 4};
        int[] value = {15, 20, 30};
        int bagWight = 4;
        testWeightBagProblem(weight, value, bagWight);
    }
    public static void testWeightBagProblem(int[] weight, int[] value, int bagWeight){
        int wLen = weight.length;
        //定义dp数组：dp[j]表示背包容量为j时，能获得的最大价值
        int[] dp = new int[bagWeight + 1];
        //遍历顺序：先遍历物品，再遍历背包容量
        for (int i = 0; i < wLen; i++){
            for (int j = bagWeight; j >= weight[i]; j--){
                dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
            }
        }
        //打印dp数组
        for (int j = 0; j <= bagWeight; j++){
            System.out.print(dp[j] + " ");
        }
    }
}
```
[返回目录](#list-of-labs)
### LAB10

[返回目录](#list-of-labs)

### LAB11

[返回目录](#list-of-labs)

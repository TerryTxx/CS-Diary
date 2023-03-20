# Binary trees

[Back to Catalogue](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/self_study.md)

---
Leetcode
### Traversal Binary Tree(https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/leetcode/BinaryTree.md)

---

### General Binary Tree-Basic Understanding
- 1.[Category](#category)
- 2.[Storage Binary Tree](#storage-method)
- 3.[Definite a Binary Tree](#definite-binary-tree)
### Traversal Binary Tree
- [BFS](#1-bfs)
- [DFS(All kinds of traversal)](#2dfs)
- 1.[Recursion](#recursion-of-binary-trees)
- - 1.[pre-order](#preorder-recursion-)
- - 2.[in-order](#inorder-recursion-)
- - 3.[post-order](#postorder-recursion-)
- 2.[Non-Recursion]
- - 1.[pre-order](#pre-order-traversal-no-recursion)
- - 2.[in-order](#in-order-traversal-no-recursion)
- - 3.[post-order](#post-order-no-recursion)




-----
### Category
#### Full Binary Tree
Full Binary Tree is: A Binary Tree is full if every node has 0 or 2 children (source: GeeksforGeeks). Translated into Chinese, this means that a binary tree is full if every node has 0 or 2 children.

Here is an example of a Full Binary Tree
```
           18
          / \   
         15 20    
        / \       
       40 50   
      / \
     30 50
```
Because each node contains either two children or zero children, there is no such thing as a node containing only one child, so it is a Full Binary Tree.

The following example is also a Full Binary Tree
```
         18
        / \  
       15 30  
      / \ / \
    40 50 100 40
```
This is not only an example of a Full Binary Tree, but also an example of a Perfect Binary Tree, which we will talk about below.

The following example is not a Full Binary Tree
```
          18
         / \   
       15   20    
      /         
     40      
    / \
   30 50
```
Because node 15 has only one child node 40 and no right child node in this binary tree, the whole tree is not a Full Binary Tree.

The Full Binary Tree has an important property: if we write the number of all intrinsic nodes as capital I and the number of all leaf nodes as capital L; then we have L = I + 1.

Complete Binary Tree
The English definition of a Complete Binary Tree is: A Binary Tree is complete Binary Tree if all levels are completely filled except possibly the last level and the last level has all keys as left as possible (source: GeeksforGeeks). This means that a binary tree is a "complete binary tree" if all levels are completely filled except possibly the last level and the last level has all keys as left as possible (source: GeeksforGeeks).

See an example of a complete binary tree.
```
           18
          /  \  
        15     30  
       /  \     / \
     40   50  100 40
    / \   /
   8  7  9
```
Look at another example that is not a complete binary tree.
```
           18
          / \  
        15   30  
       / \   / \
     40 50  100 40
    / \  \
    8 7   9
```
In this binary tree, the leaf node under node 50 is at the bottom level of the tree; however, the left node of 50 is not filled, but its right node is filled with 9, so the binary tree is not a Complete Binary Tree.

#### [back to list](#general-binary-tree-basic-understanding)


### Storage method
Chain storage (pointers)
Essentially, it can be understood as a linkedlist with two pointers of its own.

Linear storage (arrays)--used little,just know how it works
#### [back to list](#general-binary-tree-basic-understanding)


### Traversal Binary Tree
#### Graph theory: depth-first search, breadth-first search`
```
2.DFS: What we call pre-order traversal, mid-order traversal and post-order traversal are all DFS;
    generally use recursion,you can also use a stack, simulating recursion
    Iteration can also be used
```
```
                 5
               /   \  
              4      6
             / \    / \      
            1   2  7   8      
Pre-order traversal: (centre,  left,  right)
                       5      4,1,2   6,7,8
in-order traversal: (left, centre, right)
                    1,4,2    5     7,6,8
Post-order traversal: (left, right, centre)
                      1,2,4   7,,6,8   9
```
```
1. BFS: search line by line in tree, and circle by circle in graph;
    Implementation by queue
```
#### [back to list](#general-binary-tree-basic-understanding)


### Definite Binary Tree
###### leetcode is often the core code and the tree is defined directly, so we need to fully understand, for ourselves, the binary tree and how its nodes are defined.
```javascript
    Stack TreeNode{//body
    int val;
    TreeNode left;//left subtree
    TreeNode right;//right sub tree
    TreeNode(t){
        left = null;
        right = null;
    }
    }
```
#### [back to list](#general-binary-tree-basic-understanding)


------

### Traversal Binary Tree
----
### 1. BFS

search line by line in tree, and circle by circle in graph;
(Implementation by queue)
Demo:
```java

```

-------

### 2.DFS

(pre-order traversal, mid-order traversal and post-order traversal are all DFS;)

-----
### Recursion of Binary Trees
Steps:(by stack)
```text
1. Determining the parameters and return values of recursive functions.
2. Determination of termination conditions.
3. Determining the logic of single-level recursion.
                 ○
                / \
               ○    ○
             /\     
           ○   ○  
```

```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        inorder(root, result);
        return result;
    }
```

#### preorder recursion:
```java
    //1. generally RootNode and Array; return void as paramater is in funcion already
           public void preorder(TreeNode root, List<Integer> result) {
    //2.  stop the recursion as root is null
            if (root == null) {
            return;
            }
    //3. middle, left,  right
        result.add(root.val);//middle******
        preorder(root.left, result);//left
        preorder(root.right, result);//right
 }
```
#### inorder recursion:
```java
    //1. generally RootNode and Array; return void as paramater is in funcion already
    public void inorder(TreeNode root, List<Integer> result) {
    //2.  stop the recursion as root is null
        if (root == null) 
            return;
        
    //3. left, middle,  right
        inorder(root.left, result);
        result.add(root.val);//******
        inorder(root.right, result);
    }
```
#### postorder recursion:
```java
 //1. generally RootNode and Array; return void as paramater is in funcion already
       public void postorder(TreeNode root, List<Integer> result) {
    //2.  stop the recursion as root is null
            if (root == null) {
            return;
            }
       //3.  left,  right,  middle
        postorder(root.left, result);
        postorder(root.right, result);
        result.add(root.val);//*******
 }
```
#### [back to list](#general-binary-tree-basic-understanding)

### Non-recursive traversals
```
              5
            /  \
           4    6
          / \
         2   1
```

### Pre-order traversal no-recursion
centre-left-right

Entry Stack order: centre-right-left
```text
   in stack entry first out later
   in stack 
      5 in    5 out
    6,4 in    4 out
    6,1,2 in  2 out
    6,1       1 out
              6 out
  out value keep in array 5,4,2,1,6
```

```java
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null){
            return result;
        }
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        while (!stack.isEmpty()){
            TreeNode node = stack.pop();
            result.add(node.val);
            if (node.right != null){
                stack.push(node.right);
            }
            if (node.left != null){
                stack.push(node.left);
            }
        }
        return result;
    }
}
```

#### [back to list](#general-binary-tree-basic-understanding)

### in-order traversal no-recursion
left-middle-right

in stack order: left-right
```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null){
            return result;
        }
        Stack<TreeNode> stack = new Stack<>();
        TreeNode cur = root;
        while (cur != null || !stack.isEmpty()){
           if (cur != null){
               stack.push(cur);
               cur = cur.left;
           }else{
               cur = stack.pop();
               result.add(cur.val);
               cur = cur.right;
           }
        }
        return result;
    }
}
```


#### [back to list](#general-binary-tree-basic-understanding)

### Post-order no-recursion 
Left-Right-Middle

Entry stack order: centre-left-right

Out-stack order: centre-right-left

finally flip result

```java
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null){
            return result;
        }
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        while (!stack.isEmpty()){
            TreeNode node = stack.pop();
            result.add(node.val);
            if (node.left != null){
                stack.push(node.left);
            }
            if (node.right != null){
                stack.push(node.right);
            }
        }
        Collections.reverse(result);
        return result ;
    }
}
```

#### [back to list](#general-binary-tree-basic-understanding)


Max. depth



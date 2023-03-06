# Binary trees

[Back to Catalogue](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/self_study.md)

### [General Binary Tree-Basic Understanding]()
- 1.[Category](#category)
- 2.[Storage Binary Tree](#storage-method)
- 3.[Traversal Binary Tree](#traversal-binary-tree)
- [(All kinds of traversal)](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/treversalBT.md)
- 4.[Definite a Binary Tree](#definite-binary-tree)

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
       15 20    
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
          / \  
        15 30  
       / \ / \
     40 50 100 40
    / \ /
    8 7 9
```
Look at another example that is not a complete binary tree.
```
             18
          / \  
        15 30  
       / \ / \
     40 50 100 40
    / \ \
    8 7 9
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
1.DFS: What we call pre-order traversal, mid-order traversal and post-order traversal are all DFS;
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
2. BFS: search line by line in tree, and circle by circle in graph;
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
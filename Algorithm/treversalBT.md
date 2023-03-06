## Traversal Binary Tree



### 1.DFS
(pre-order traversal, mid-order traversal and post-order traversal are all DFS;)

### [Recursion of Binary Tree](#recursion-of-binary-tree)

[preorder traversal: (leetcode 144)](#)

[inorder traversal: (leetcode 145)](#)

[postorder traversal: (leetcode 94)](#)

### [Non-recursive traversal](#)


### 2. BFS
search line by line in tree, and circle by circle in graph;

(Implementation by queue)

-----
### Recursion of Binary Tree
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
preorder:
```javascript
    //1. generally RootNode and Array; return void as paramater is in funcion already
            public void preorder(TreeNode root, List<Integer> result) 
    //2.  stop the recursion as root is null
            if (root == null) {
            return;
            }
    //3. middle, left,  right
        result.add(root.val);//middle******
        preorder(root.left, result);//left
        preorder(root.right, result);//right
```
inorder:
```javascript
    //1. generally RootNode and Array; return void as paramater is in funcion already
            public void preorder(TreeNode root, List<Integer> result) 
    //2.  stop the recursion as root is null
            if (root == null) {
            return;
            }
    //3. left, middle,  right
            inorder(root.left, list);
              list.add(root.val);//******
             inorder(root.right, list);
```
postorder:
```javascript
    //1. generally RootNode and Array; return void as paramater is in funcion already
            public void preorder(TreeNode root, List<Integer> result) 
    //2.  stop the recursion as root is null
            if (root == null) {
            return;
            }
    //3.  left,  right,  middle
        postorder(root.left, list);
        postorder(root.right, list);
        list.add(root.val);//*******
```

### Non-recursive traversal
```
              5
            /  \
           4    6
          / \
         2   1
```


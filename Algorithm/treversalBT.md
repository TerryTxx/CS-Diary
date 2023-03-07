## Traversal Binary Tree



### 1.DFS

(pre-order traversal, mid-order traversal and post-order traversal are all DFS;)

### [Recursion of Binary Tree](#recursion-of-binary-trees)

[preorder traversal: (leetcode 144)](#preorder-recursion-)

[inorder traversal: (leetcode 94)](#inorder-recursion-)

[postorder traversal: (leetcode 145)](#postorder-recursion-)

### [Non-recursive traversal](#non-recursive-traversals)

### [Max. and min. depth]
----
### 2. BFS


search line by line in tree, and circle by circle in graph;

(Implementation by queue)

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

### Non-recursive traversals
```
              5
            /  \
           4    6
          / \
         2   1
```

Pre-order traversal order: centre-left-right.
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
in-order traversal order: left-middle-right
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
Post-order traversal order Left-Right-Middle
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


Max. depth



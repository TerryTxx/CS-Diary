
### Traversal Binary Tree
DFS:
- [144.Binary Tree Preorder Traversal](#leetcode-144)
- [94.Binary Tree Inorder Traversal](#leetcode-94)
- [145.Binary Tree Postorder Traversal](#leetcode-145)



BFS:
- [102.Binary Tree Level Order Traversal](#leetcode-102)
- Leetcode 107
- Leetcode 100
- Leetcode 129
- Leetcode 124
- Leetcode 199
- Leetcode 637
- Leetcode 429
- Leetcode 515
- Leetcode 116
- Leetcode 117
- Leetcode 103
- Leetcode 111


- [226. Invert Binary Tree](#leetcode-226)
- [101. Symmetric Tree ](#leetcode-101)
- [104. Maximum Depth of Binary Tree](#leetcode-104)
- [559. Maximum Depth of N-ary Tree](#leetcode-559)
- [111. Minimum Depth of Binary Tree](#leetcode-111)
- [222. Count Complete Tree Nodes](#leetcode-222)
- [110. Balanced Binary Tree](#leetcode-110)
- [257. Binary Tree Paths](#leetcode-257)
- [404. Sum of Left Leaves](#leetcode-404)
- [513. Find Bottom Left Tree Value](#leetcode-513)
- [112. Path Sum](#leetcode-112)
- [113. Path Sum II](#leetcode-113)
- [105. Construct Binary Tree from Preorder and Inorder Traversal](#leetcode-105)
- [106. Construct Binary Tree from Inorder and Postorder Traversal](#leetcode-106)
- 429
- 589
- 590
- [654. Maximum Binary Tree](#leetcode-654)
- [617. Merge Two Binary Trees](#leetcode-617)


- 297
- 543
- 1443


---
### Leetcode 144
Binary Tree Preorder Traversal
```java

class Solution {
    //1. recursion:
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        preorder(root, result);
        return result;
    }
    //a. generally RootNode and Array; return void as paramater is in funcion already
    public void preorder(TreeNode root, List<Integer> result) {
        //b.  stop the recursion as root is null
        if (root == null) {
            return;
        }
        //b. middle, left,  right
        result.add(root.val);//middle******
        preorder(root.left, result);//left
        preorder(root.right, result);//right
    }

// // 2. use Stack
// public List<Integer> preorderTraversal(TreeNode root) {
//     List<Integer> result = new LinkedList<>();
//     Stack<TreeNode> st = new Stack<>();
//     if (root != null) st. push(root);
//     while (!st. empty()) {
//         TreeNode node = st. peek();
//         if (node != null) {
//             st.pop(); // Pop the node to avoid repeated operations, and then add the right, middle and left nodes to the stack
//             if (node.right!=null) st.push(node.right); // Add the right node (empty nodes are not pushed into the stack)
//             if (node.left!=null) st.push(node.left); // Add the left node (empty nodes are not pushed into the stack)
//             st.push(node); // add middle node
//             st.push(null); // The middle node has been visited, but it has not been processed yet, and an empty node is added as a mark.

//         } else { // Put the next node into the result set only when an empty node is encountered
//             st.pop(); // pop the empty node
//             node = st.peek(); // Retake the elements in the stack
//             st. pop();
//             result.add(node.val); // add to the result set
//         }
//     }
//     return result;
// }
}
```
[[back to list]](#traversal-binary-tree)
### Leetcode 94
Binary Tree Inorder Traversal
```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        inorder(root, result);
        return result;
    }

    //1. generally RootNode and Array; return void as paramater is in funcion already
    public void inorder(TreeNode root, List<Integer> result) {
        //2.  stop the recursion as root is null
        if (root == null) {
            return;
        }
        //3. left, middle,  right
        inorder(root.left, result);
        result.add(root.val);//******
        inorder(root.right, result);
    }



    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new LinkedList<>();
        Stack<TreeNode> st = new Stack<>();
        if (root != null) st. push(root);
        while (!st. empty()) {
            TreeNode node = st. peek();
            if (node != null) {
                st.pop(); // Pop the node to avoid repeated operations, and then add the right, middle and left nodes to the stack
                if (node.right!=null) st.push(node.right); // Add the right node (empty nodes are not pushed into the stack)
                st.push(node); // add middle node
                st.push(null); // The middle node has been visited, but it has not been processed yet, and an empty node is added as a mark.

                if (node.left!=null) st.push(node.left); // Add the left node (empty nodes are not pushed into the stack)
            } else { // Put the next node into the result set only when an empty node is encountered
                st.pop(); // pop the empty node
                node = st.peek(); // Retake the elements in the stack
                st. pop();
                result.add(node.val); // add to the result set
            }
        }
        return result;
    }
    }
```
[[back to list]](#traversal-binary-tree)
### Leetcode 145
Binary Tree Postorder Traversal
```java
class Solution {
// 1. sort by recursion
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        postorder(root, result);
        return result;
    }
        //a. generally RootNode and Array; return void as paramater is in funcion already
       public void postorder(TreeNode root, List<Integer> result) {
        //b.  stop the recursion as root is null
            if (root == null) {
            return;
            }
       //c.  left,  right,  middle
        postorder(root.left, result);
        postorder(root.right, result);
        result.add(root.val);//*******
 }
 // // 2. add with stack
//    public List<Integer> postorderTraversal(TreeNode root) {
//        List<Integer> result = new LinkedList<>();
//        Stack<TreeNode> st = new Stack<>();
//        if (root != null) st. push(root);
//        while (!st. empty()) {
//            TreeNode node = st. peek();
//            if (node != null) {
//                st.pop(); // Pop the node to avoid repeated operations, and then add the right, middle and left nodes to the stack
//                st.push(node); // add middle node
//                st.push(null); // The middle node has been visited, but it has not been processed yet, and an empty node is added as a mark.
//                if (node.right!=null) st.push(node.right); // Add the right node (empty nodes are not pushed into the stack)
//                if (node.left!=null) st.push(node.left); // Add the left node (empty nodes are not pushed into the stack)
//
//            } else { // Put the next node into the result set only when an empty node is encountered
//                st.pop(); // pop the empty node
//                node = st.peek(); // Retake the elements in the stack
//                st. pop();
//                result.add(node.val); // add to the result set
//            }
//        }
//        return result;
//    }
}
```
[[back to list]](#traversal-binary-tree)
### Leetcode 102
Binary Tree Level Order Traversal
```java
class Solution {
    public List<List<Integer>> resList = new ArrayList<List<Integer>>();

    public List<List<Integer>> levelOrder(TreeNode root) {
       checkFun01(root,0);
        //checkFun02(root);
        return resList;
    }
    //DFS--recursive method
    public void checkFun01(TreeNode node, Integer deep) {
        if (node == null) return;
        deep++;

        if (resList. size() < deep) {
            //When the level increases, the Item of the list also increases, and the index value of the list is used to define the level
            List<Integer> item = new ArrayList<Integer>();
            resList. add(item);
        }
        resList.get(deep - 1).add(node.val);

        checkFun01(node. left, deep);
        checkFun01(node.right, deep);
    }

    //BFS--iteration method--with the help of queue
    public void checkFun02(TreeNode node) {
        if (node == null) return;
        Queue<TreeNode> que = new LinkedList<TreeNode>();
        que.offer(node);

        while (!que. isEmpty()) {
            List<Integer> itemList = new ArrayList<Integer>();
            int len = que. size();

            while (len > 0) {
                TreeNode tmpNode = que. poll();
                itemList. add(tmpNode. val);

                if (tmpNode. left != null) que. offer(tmpNode. left);
                if (tmpNode.right != null) que.offer(tmpNode.right);
                len--;
            }
            resList. add(itemList);
        }

    }
}
```
[[back to list]](#traversal-binary-tree)


### Leetcode 226
Invert Binary Tree
```java
//DFS recursion
class Solution {
    /**
      * Both forward and backward order traversal
      * In-order doesn’t work, because first the left child is exchanged for children, then the root child is exchanged (after the completion, the right child has become the original left child), and then the right child is exchanged for children (in fact, the original left child is exchanged at this time )
      */
     public TreeNode invertTree(TreeNode root) {
         if (root == null) {
             return null;
         }
         invertTree(root. left);
         invertTree(root.right);
         swapChildren(root);
         return root;
     }

     private void swapChildren(TreeNode root) {
         TreeNode tmp = root. left;
         root.left = root.right;
         root.right = tmp;
     }
}

//BFS
class Solution {
     public TreeNode invertTree(TreeNode root) {
         if (root == null) {return null;}
         ArrayDeque<TreeNode> deque = new ArrayDeque<>();
         deque.offer(root);
         while (!deque. isEmpty()) {
             int size = deque. size();
             while (size-- > 0) {
                 TreeNode node = deque. poll();
                 swap(node);
                 if (node. left != null) deque. offer(node. left);
                 if (node.right != null) deque.offer(node.right);
             }
         }
         return root;
     }
     public void swap(TreeNode root) {
         TreeNode temp = root. left;
         root.left = root.right;
         root.right = temp;
     }
}
```
[[back to list]](#traversal-binary-tree)
### Leetcode 101
Symmetric Tree
```java

class Solution {
/**
      * Recursive method
      */
     public boolean isSymmetric(TreeNode root) {
         return compare(root. left, root. right);
     }

     private boolean compare(TreeNode left, TreeNode right) {

         if (left == null && right != null) {
             return false;
         }
         if (left != null && right == null) {
             return false;
         }

         if (left == null && right == null) {
             return true;
         }
         if (left.val != right.val) {
             return false;
         }
         // compare outer
         boolean compareOutside = compare(left. left, right. right);
         // compare inside
         boolean compareInside = compare(left. right, right. left);
         return compareOutside && compareInside;
     }

     /**
      * Iterative method
      * Use a double-ended queue, which is equivalent to two stacks
      */
//      public boolean isSymmetric2(TreeNode root) {
//          Deque<TreeNode> deque = new LinkedList<>();
//          deque.offerFirst(root.left);
//          deque.offerLast(root.right);
//          while (!deque. isEmpty()) {
//              TreeNode leftNode = deque.pollFirst();
//              TreeNode rightNode = deque.pollLast();
//              if (leftNode == null && rightNode == null) {
//                  continue;
//              }
// // if (leftNode == null && rightNode != null) {
// // return false;
// // }
// // if (leftNode != null && rightNode == null) {
// // return false;
// // }
// // if (leftNode.val != rightNode.val) {
// // return false;
// // }
//              // Combine the above three judgment conditions
//              if (leftNode == null || rightNode == null || leftNode.val != rightNode.val) {
//                  return false;
//              }
//              deque.offerFirst(leftNode.left);
//              deque.offerFirst(leftNode.right);
//              deque.offerLast(rightNode.right);
//              deque.offerLast(rightNode.left);
//          }
//          return true;
//      }

//      /**
//       * Iterative method
//       * Use normal queue
//       */
//      public boolean isSymmetric3(TreeNode root) {
//          Queue<TreeNode> deque = new LinkedList<>();
//          deque.offer(root.left);
//          deque.offer(root.right);
//          while (!deque. isEmpty()) {
//              TreeNode leftNode = deque. poll();
//              TreeNode rightNode = deque. poll();
//              if (leftNode == null && rightNode == null) {
//                  continue;
//              }
//             // if (leftNode == null && rightNode != null) {
//             // return false;
//             // }
//             // if (leftNode != null && rightNode == null) {
//             // return false;
//             // }
//             // if (leftNode.val != rightNode.val) {
//             // return false;
//             // }
//              // Combine the above three judgment conditions
//              if (leftNode == null || rightNode == null || leftNode.val != rightNode.val) {
//                  return false;
//              }
//              // The order here is different from using Deque
//              deque.offer(leftNode.left);
//              deque.offer(rightNode.right);
//              deque.offer(leftNode.right);
//              deque.offer(rightNode.left);
//          }
//          return true;
//      }
}
```
[[back to list]](#traversal-binary-tree)


### leetcode 104
Maximum Depth of Binary Tree
```java
// class Solution {
//      /**
//       * Recursive method
//       */
//      public int maxDepth(TreeNode root) {
//          if (root == null) {
//              return 0;
//          }
//          int leftDepth = maxDepth(root.left);
//          int rightDepth = maxDepth(root.right);
//          return Math.max(leftDepth,rightDepth) + 1;
//      }
// }

class Solution {
    /**
     * Recursive method (depth method)
     */
    //Define the maximum depth
    int maxnum = 0;

    public int maxDepth(TreeNode root) {
        ans(root,0);
        return maxnum;
    }

    // Recursively find the maximum depth
    void ans(TreeNode tr,int tmp){
        if(tr==null) return;
        tmp++;
        maxnum = maxnum<tmp?tmp:maxnum;
        ans(tr.left,tmp);
        ans(tr.right,tmp);
        tmp--;
    }
}

// class Solution {
//      /**
//       * Iterative method, using layer order traversal
//       */
//      public int maxDepth(TreeNode root) {
//          if(root == null) {
//              return 0;
//          }
//          Deque<TreeNode> deque = new LinkedList<>();
//          deque.offer(root);
//          int depth = 0;
//          while (!deque. isEmpty()) {
//              int size = deque. size();
//              depth++;
//              for (int i = 0; i < size; i++) {
//                  TreeNode node = deque. poll();
//                  if (node. left != null) {
//                      deque.offer(node.left);
//                  }
//                  if (node. right != null) {
//                      deque.offer(node.right);
//                  }
//              }
//          }
//          return depth;
//      }
// }
```
[[back to list]](#traversal-binary-tree)


### leetcode 559
Maximum Depth of N-ary Tree
```java
class Solution {
     /*Recursive method, post-order traversal to find the height of the root node*/
     public int maxDepth(Node root) {
         if (root == null) return 0;

         int depth = 0;
         if (root. children != null){
             for (Node child : root.children){
                 depth = Math.max(depth, maxDepth(child));
             }
         }

         return depth + 1; // middle node
     }
}
class solution {
     /**
      * Iterative method, using layer order traversal
      */
     public int maxDepth(Node root) {
         if (root == null) return 0;
         int depth = 0;
         Queue<Node> que = new LinkedList<>();
         que.offer(root);
         while (!que.isEmpty())
         {
             depth++;
             int len = que. size();
             while (len > 0)
             {
                 Node node = que. poll();
                 for (int i = 0; i < node. children. size(); i++)
                     if (node. children. get(i) != null)
                         que.offer(node.children.get(i));
                 len--;
             }
         }
         return depth;
     }
}
```
[[back to list]](#traversal-binary-tree)


### leetcode 111
Minimum Depth of Binary Tree
```java

class Solution {
     /**
      * The recursive method is more complicated than seeking MaxDepth
      * because the minimum depth is the number of nodes on the shortest path from the root node to the nearest **leaf node**
      */
     public int minDepth(TreeNode root) {
         if (root == null) {
             return 0;
         }
         int leftDepth = minDepth(root. left);
         int rightDepth = minDepth(root.right);
         if (root. left == null) {
             return rightDepth + 1;
         }
         if (root. right == null) {
             return leftDepth + 1;
         }
         // None of the left and right nodes are null
         return Math.min(leftDepth, rightDepth) + 1;
     }
}
// class Solution {
//     /**
//       * Iterative method, layer order traversal
//       */
//      public int minDepth(TreeNode root) {
//          if (root == null) {
//              return 0;
//          }
//          Deque<TreeNode> deque = new LinkedList<>();
//          deque.offer(root);
//          int depth = 0;
//          while (!deque. isEmpty()) {
//              int size = deque. size();
//              depth++;
//              for (int i = 0; i < size; i++) {
//                  TreeNode poll = deque.poll();
//                  if (poll. left == null && poll. right == null) {
//                      // It is a leaf node, directly returns depth, because it traverses from top to bottom, so this value is the minimum value
//                      return depth;
//                  }
//                  if (poll. left != null) {
//                      deque.offer(poll.left);
//                  }
//                  if (poll. right != null) {
//                      deque.offer(poll.right);
//                  }
//              }
//          }
//          return depth;
//      }
// }
```
[[back to list]](#traversal-binary-tree)

### leetcode 222
Count Complete Tree Nodes
```java

class Solution {
     // general recursive solution
     public int countNodes(TreeNode root) {
         if(root == null) {
             return 0;
         }
         return countNodes(root. left) + countNodes(root. right) + 1;
     }
}
// class Solution {
//      // Iterative method
//      public int countNodes(TreeNode root) {
//          if (root == null) return 0;
//          Queue<TreeNode> queue = new LinkedList<>();
//          queue.offer(root);
//          int result = 0;
//          while (!queue. isEmpty()) {
//              int size = queue. size();
//              while (size -- > 0) {
//                  TreeNode cur = queue. poll();
//                  result++;
//                  if (cur. left != null) queue. offer(cur. left);
//                  if (cur.right != null) queue.offer(cur.right);
//              }
//          }
//          return result;
//      }
// }
// class Solution {
//      /**
//       * Solution for complete binary tree
//       *
//       * The number of nodes in a full binary tree is: 2^depth - 1
//       */
//      public int countNodes(TreeNode root) {
//          if (root == null) return 0;
//          TreeNode left = root. left;
//          TreeNode right = root.right;
//          int leftDepth = 0, rightDepth = 0; // The initial value of 0 here is purposeful, for the convenience of finding the exponent below
//          while (left != null) { // Find the depth of the left subtree
//              left = left.left;
//              leftDepth++;
//          }
//          while (right != null) { // Find the depth of the right subtree
//              right = right.right;
//              rightDepth++;
//          }
//          if (leftDepth == rightDepth) {
//              return (2 << leftDepth) - 1; // Note that (2<<1) is equivalent to 2^2, so leftDepth is initially 0
//          }
//          return countNodes(root. left) + countNodes(root. right) + 1;
//      }
// }
```
[[back to list]](#traversal-binary-tree)

### leetcode 110
Balanced Binary Tree
```java

class Solution {
    /**
      * Recursive method
      */
     public boolean isBalanced(TreeNode root) {
         return getHeight(root) != -1;
     }

     private int getHeight(TreeNode root) {
         if (root == null) {
             return 0;
         }
         int leftHeight = getHeight(root. left);
         if (leftHeight == -1) {
             return -1;
         }
         int rightHeight = getHeight(root.right);
         if (rightHeight == -1) {
             return -1;
         }
         // The height difference between the left and right subtrees is greater than 1, and return -1 means that it is no longer a balanced tree
         if (Math. abs(leftHeight - rightHeight) > 1) {
             return -1;
         }
         return Math.max(leftHeight, rightHeight) + 1;
     }
}

// class Solution {
//     /**
//       * Iterative method, low efficiency, repeated traversal when calculating height
//       * Time complexity: O(n^2)
//       */
//      public boolean isBalanced(TreeNode root) {
//          if (root == null) {
//              return true;
//          }
//          Stack<TreeNode> stack = new Stack<>();
//          TreeNode pre = null;
//          while (root!= null || !stack. isEmpty()) {
//              while (root != null) {
//                  stack. push(root);
//                  root = root. left;
//              }
//              TreeNode inNode = stack. peek();
//              // The right node is null or has been traversed
//              if (inNode.right == null || inNode.right == pre) {
//                  // Compare the height difference between the left and right subtrees, and output
//                  if (Math.abs(getHeight(inNode.left) - getHeight(inNode.right)) > 1) {
//                      return false;
//                  }
//                  stack. pop();
//                  pre = inNode;
//                  root = null;//Under the current node, there is no node to traverse
//              } else {
//                  root = inNode.right;// The right node has not been traversed yet, traverse the right node
//              }
//          }
//          return true;
//      }

//      /**
//       * Layer sequence traversal, find the height of the node
//       */
//      public int getHeight(TreeNode root) {
//          if (root == null) {
//              return 0;
//          }
//          Deque<TreeNode> deque = new LinkedList<>();
//          deque.offer(root);
//          int depth = 0;
//          while (!deque. isEmpty()) {
//              int size = deque. size();
//              depth++;
//              for (int i = 0; i < size; i++) {
//                  TreeNode poll = deque.poll();
//                  if (poll. left != null) {
//                      deque.offer(poll.left);
//                  }
//                  if (poll. right != null) {
//                      deque.offer(poll.right);
//                  }
//              }
//          }
//          return depth;
//      }
// }

// class Solution {
//     /**
//       * Optimize the iterative method, optimize the getHeight method of the violent iterative method, use TreeNode.val to save the height of the current node, so that there will be no repeated traversal
//       * The time complexity of obtaining the height algorithm can be reduced to O(1), and the total time complexity can be reduced to O(n).
//       * Time complexity: O(n)
//       */
//      public boolean isBalanced(TreeNode root) {
//          if (root == null) {
//              return true;
//          }
//          Stack<TreeNode> stack = new Stack<>();
//          TreeNode pre = null;
//          while (root != null || !stack. isEmpty()) {
//              while (root != null) {
//                  stack. push(root);
//                  root = root. left;
//              }
//              TreeNode inNode = stack. peek();
//              // The right node is null or has been traversed
//              if (inNode.right == null || inNode.right == pre) {
//                  // output
//                  if (Math.abs(getHeight(inNode.left) - getHeight(inNode.right)) > 1) {
//                      return false;
//                  }
//                  stack. pop();
//                  pre = inNode;
//                  root = null;//Under the current node, there is no node to traverse
//              } else {
//                  root = inNode.right;// The right node has not been traversed yet, traverse the right node
//              }
//          }
//          return true;
//      }

//      /**
//       * Find the height of the node
//       */
//      public int getHeight(TreeNode root) {
//          if (root == null) {
//              return 0;
//          }
//          int leftHeight = root.left != null ? root.left.val : 0;
//          int rightHeight = root.right != null ? root.right.val : 0;
//          int height = Math.max(leftHeight, rightHeight) + 1;
//          root.val = height;// Use TreeNode.val to save the height of the current node
//          return height;
//      }
// }
```
[[back to list]](#traversal-binary-tree)

### leetcode 257
Binary Tree Paths
```java
//solution one
class Solution {
     /**
      * Recursive method
      */
     public List<String> binaryTreePaths(TreeNode root) {
         List<String> res = new ArrayList<>();// save the final result
         if (root == null) {
             return res;
         }
         List<Integer> paths = new ArrayList<>();// as the path in the result
         traversal(root, paths, res);
         return res;
     }

     private void traversal(TreeNode root, List<Integer> paths, List<String> res) {
         paths.add(root.val);// Preorder traversal, medium
         // encountered a leaf node
         if (root. left == null && root. right == null) {
             // output
             StringBuilder sb = new StringBuilder();// StringBuilder is used to concatenate strings, which is faster
             for (int i = 0; i < paths. size() - 1; i++) {
                 sb.append(paths.get(i)).append("->");
             }
             sb.append(paths.get(paths.size() - 1));// record the last node
             res.add(sb.toString());// collect a path
             return;
         }
         // Recursion and backtracking are performed at the same time, so put them in the same curly braces
         if (root.left != null) { // left
             traversal(root. left, paths, res);
             paths.remove(paths.size() - 1);// Backtracking
         }
         if (root.right != null) { // right
             traversal(root.right, paths, res);
             paths.remove(paths.size() - 1);// Backtracking
         }
     }
}

// Solution 2
class Solution {
     /**
      * Iterative method
      */
     public List<String> binaryTreePaths(TreeNode root) {
         List<String> result = new ArrayList<>();
         if (root == null)
             return result;
         Stack<Object> stack = new Stack<>();
         // Nodes and paths are pushed onto the stack at the same time
         stack. push(root);
         stack.push(root.val + "");
         while (!stack. isEmpty()) {
             // Node and path are popped out of the stack at the same time
             String path = (String) stack. pop();
             TreeNode node = (TreeNode) stack. pop();
             // If a leaf node is found
             if (node. left == null && node. right == null) {
                 result. add(path);
             }
             // right child node is not empty
             if (node. right != null) {
                 stack.push(node.right);
                 stack.push(path + "->" + node.right.val);
             }
             // left child node is not empty
             if (node. left != null) {
                 stack.push(node.left);
                 stack.push(path + "->" + node.left.val);
             }
         }
         return result;
     }
}
```
[[back to list]](#traversal-binary-tree)

### leetcode 404
Sum of Left Leaves
```java

// Recursive approach, most efficient
class Solution {
    public int sumOfLeftLeaves(TreeNode root) {
        if (root == null) return 0;
        int leftValue = sumOfLeftLeaves(root.left); // left
        int rightValue = sumOfLeftLeaves(root.right); // right
                                                       
        int midValue = 0;
        if (root.left != null && root.left.left == null && root.left.right == null) { 
            midValue = root.left.val;
        }
        int sum = midValue + leftValue + rightValue; // middle
        return sum;
    }
}

// // iterative method
// class Solution {
//     public int sumOfLeftLeaves(TreeNode root) {
//         if (root == null) return 0;
//         Stack<TreeNode> stack = new Stack<> ();
//         stack.add(root);
//         int result = 0;
//         while (!stack.isEmpty()) {
//             TreeNode node = stack.pop();
//             if (node.left != null && node.left.left == null && node.left.right == null) {
//                 result += node.left.val;
//             }
//             if (node.right != null) stack.add(node.right);
//             if (node.left != null) stack.add(node.left);
//         }
//         return result;
//     }
// }

// Hierarchical iteration
// class Solution {
//     public int sumOfLeftLeaves(TreeNode root) {
//         int sum = 0;
//         if (root == null) return 0;
//         Queue<TreeNode> queue = new LinkedList<>();
//         queue.offer(root);
//         while (!queue.isEmpty()) {
//             int size = queue.size();
//             while (size -- > 0) {
//                 TreeNode node = queue.poll();
//                 if (node.left != null) { // left node is not empty
//                     queue.offer(node.left);
//                     if (node.left.left == null && node.left.right == null){ // left leaf node
//                         sum += node.left.val;
//                     }
//                 }
//                 if (node.right != null) queue.offer(node.right);
//             }
//         }
//         return sum;
//     }
// }
```
[[back to list]](#traversal-binary-tree)

### leetcode 513
Find Bottom Left Tree Value
```java
// recursive method
class Solution {
     private int Deep = -1;
     private int value = 0;
     public int findBottomLeftValue(TreeNode root) {
         value = root.val;
         findLeftValue(root,0);
         return value;
     }

     private void findLeftValue (TreeNode root, int deep) {
         if (root == null) return;
         if (root. left == null && root. right == null) {
             if (deep > Deep) {
                 value = root.val;
                 Deep = deep;
             }
         }
         if (root. left != null) findLeftValue(root. left, deep + 1);
         if (root.right != null) findLeftValue(root.right,deep + 1);
     }
}
//Iterative method
class Solution {

     public int findBottomLeftValue(TreeNode root) {
         Queue<TreeNode> queue = new LinkedList<>();
         queue.offer(root);
         int res = 0;
         while (!queue. isEmpty()) {
             int size = queue. size();
             for (int i = 0; i < size; i++) {
                 TreeNode poll = queue.poll();
                 if (i == 0) {
                     res = poll.val;
                 }
                 if (poll. left != null) {
                     queue.offer(poll.left);
                 }
                 if (poll. right != null) {
                     queue.offer(poll.right);
                 }
             }
         }
         return res;
     }
}
```
[[back to list]](#traversal-binary-tree)

### leetcode 112
Path Sum
```java

// class Solution {
//     public boolean hasPathSum(TreeNode root, int targetSum) {
//          if (root == null) {
//              return false;
//          }
//          targetSum -= root.val;
//          // leaf node
//          if (root. left == null && root. right == null) {
//              return targetSum == 0;
//          }
//          if (root. left != null) {
//              boolean left = hasPathSum(root. left, targetSum);
//              if (left) { // already found
//                  return true;
//              }
//          }
//          if (root. right != null) {
//              boolean right = hasPathSum(root.right, targetSum);
//              if (right) { // already found
//                  return true;
//              }
//          }
//          return false;
//      }
// }

// lc112 concise method

class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {

         if (root == null) return false; // exit if empty

         // The leaf node judges whether it meets
         if (root. left == null && root. right == null) return root. val == targetSum;

         // Find the path sum of the branches on both sides
         return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
     }
}


////iteration
// class Solution {
//     public boolean hasPathSum(TreeNode root, int targetSum) {
//          if(root == null) return false;
//          stack<treenode> stack1 = new stack<>();
//          stack<integer> stack2 = new stack<>();
//          stack1. push(root);
//          stack2.push(root.val);
//          while(!stack1. isempty()) {
//              int size = stack1. size();

//              for(int i = 0; i < size; i++) {
//                  treenode node = stack1. pop();
//                  int sum = stack2. pop();

//                  // If the node is a leaf node, and the path value of the node is equal to sum, then return true
//                  if(node.left == null && node.right == null && sum == targetsum) {
//                      return true;
//                  }
//                  // Right node, when pressing a node, record the path value of the node
//                  if(node.right != null){
//                      stack1.push(node.right);
//                      stack2.push(sum + node.right.val);
//                  }
//                  // Left node, when pressing a node, record the path value of the node
//                  if(node. left != null) {
//                      stack1. push(node. left);
//                      stack2.push(sum + node.left.val);
//                  }
//              }
//          }
//          return false;
//      }
// }
```
[[back to list]](#traversal-binary-tree)
### leetcode 113
Path Sum II
```java
// //solution 1
// class Solution {
//      public List<List<Integer>> pathSum(TreeNode root, int targetsum) {
//          List<List<Integer>> res = new ArrayList<>();
//          if (root == null) return res; // non-null judgment

//          List<Integer> path = new LinkedList<>();
//          preorderdfs(root, targetsum, res, path);
//          return res;
//      }

//      public void preorderdfs(TreeNode root, int targetsum, List<List<Integer>> res, List<Integer> path) {
//          path. add(root. val);
//          // Encountered a leaf node
//          if (root. left == null && root. right == null) {
//              // found the path with targetsum
//              if (targetsum - root.val == 0) {
//                  res.add(new ArrayList<>(path));
//              }
//              return; // If the sum is not targetsum, return
//          }

//          if (root. left != null) {
//              preorderdfs(root. left, targetsum - root. val, res, path);
//              path.remove(path.size() - 1); // backtrace
//          }
//          if (root. right != null) {
//              preorderdfs(root.right, targetsum - root.val, res, path);
//              path.remove(path.size() - 1); // backtrace
//          }
//      }
// }
// Solution 2
class Solution {
     List<List<Integer>> result;
     LinkedList<Integer> path;
     public List<List<Integer>> pathSum (TreeNode root, int targetSum) {
         result = new LinkedList<>();
         path = new LinkedList<>();
         travesal(root, targetSum);
         return result;
     }
     private void travesal(TreeNode root, int count) {
         if (root == null) return;
         path.offer(root.val);
         count -= root.val;
         if (root. left == null && root. right == null && count == 0) {
             result.add(new LinkedList<>(path));
         }
         travesal(root. left, count);
         travesal(root.right, count);
         path.removeLast(); // Backtracking
     }
}
```
[[back to list]](#traversal-binary-tree)

### leetcode 105
Construct Binary Tree from Preorder and Inorder Traversal
```java

```
[[back to list]](#traversal-binary-tree)

### leetcode 106
Construct Binary Tree from Inorder and Postorder Traversal
```java
class Solution {
     Map<Integer, Integer> map; // Convenient to find the location according to the value
     public TreeNode buildTree(int[] inorder, int[] postorder) {
         map = new HashMap<>();
         for (int i = 0; i < inorder.length; i++) { // Use map to save the corresponding position of the value of the inorder sequence
             map. put(inorder[i], i);
         }

         return findNode(inorder, 0, inorder.length, postorder,0, postorder.length); // front close and back open
     }

     public TreeNode findNode(int[] inorder, int inBegin, int inEnd, int[] postorder, int postBegin, int postEnd) {
         // The range in the parameter is closed before opening
         if (inBegin >= inEnd || postBegin >= postEnd) { // If left closed and right open is not satisfied, it means there is no element, return an empty tree
             return null;
         }
         int rootIndex = map.get(postorder[postEnd - 1]); // Find the position of the last element of the postorder traversal in the inorder traversal
         TreeNode root = new TreeNode(inorder[rootIndex]); // Construct node
         int lenOfLeft = rootIndex - inBegin; // Save the number of inorder left subtrees to determine the number of postorder sequences
         root.left = findNode(inorder, inBegin, rootIndex,
                             postorder, postBegin, postBegin + lenOfLeft);
         root.right = findNode(inorder, rootIndex + 1, inEnd,
                             postorder, postBegin + lenOfLeft, postEnd - 1);
         return root;
     }
}
```
[[back to list]](#traversal-binary-tree)
### leetcode 654
Maximum Binary Tree
```java

class Solution {
     public TreeNode constructMaximumBinaryTree(int[] nums) {
         return constructMaximumBinaryTree1(nums, 0, nums. length);
     }

     public TreeNode constructMaximumBinaryTree1(int[] nums, int leftIndex, int rightIndex) {
         if (rightIndex - leftIndex < 1) {// There are no more elements
             return null;
         }
         if (rightIndex - leftIndex == 1) {// only one element
             return new TreeNode(nums[leftIndex]);
         }
         int maxIndex = leftIndex;//The position of the maximum value
         int maxVal = nums[maxIndex];// maximum value
         for (int i = leftIndex + 1; i < rightIndex; i++) {
             if (nums[i] > maxVal){
                 maxVal = nums[i];
                 maxIndex = i;
             }
         }
         TreeNode root = new TreeNode(maxVal);
         // Divide the left and right subtrees according to maxIndex
         root.left = constructMaximumBinaryTree1(nums, leftIndex, maxIndex);
         root.right = constructMaximumBinaryTree1(nums, maxIndex + 1, rightIndex);
         return root;
     }
}
```
[[back to list]](#traversal-binary-tree)
### leetcode 617
Merge Two Binary Trees
```java
class Solution {
     // recursion
     public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
         if (root1 == null) return root2;
         if (root2 == null) return root1;

         root1.val += root2.val;
         root1. left = mergeTrees(root1. left, root2. left);
         root1.right = mergeTrees(root1.right,root2.right);
         return root1;
     }
}
// class Solution {
//      // use stack iteration
//      public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
//          if (root1 == null) {
//              return root2;
//          }
//          if (root2 == null) {
//              return root1;
//          }
//          Stack<TreeNode> stack = new Stack<>();
//          stack.push(root2);
//          stack. push(root1);
//          while (!stack. isEmpty()) {
//              TreeNode node1 = stack. pop();
//              TreeNode node2 = stack. pop();
//              node1.val += node2.val;
//              if (node2.right != null && node1.right != null) {
//                  stack.push(node2.right);
//                  stack.push(node1.right);
//              } else {
//                  if (node1. right == null) {
//                      node1.right = node2.right;
//                  }
//              }
//              if (node2. left != null && node1. left != null) {
//                  stack.push(node2.left);
//                  stack.push(node1.left);
//              } else {
//                  if (node1. left == null) {
//                      node1. left = node2. left;
//                  }
//              }
//          }
//          return root1;
//      }
// }
// class Solution {
//      // use the queue to iterate
//      public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
//          if (root1 == null) return root2;
//          if (root2 == null) return root1;
//          Queue<TreeNode> queue = new LinkedList<>();
//          queue.offer(root1);
//          queue.offer(root2);
//          while (!queue. isEmpty()) {
//              TreeNode node1 = queue. poll();
//              TreeNode node2 = queue. poll();
//              // At this time, the two nodes must not be empty, and the val is added
//              node1.val = node1.val + node2.val;
//              // If the left nodes of both trees are not empty, join the queue
//              if (node1. left != null && node2. left != null) {
//                  queue.offer(node1.left);
//                  queue.offer(node2.left);
//              }
//              // If the right nodes of both trees are not empty, join the queue
//              if (node1.right != null && node2.right != null) {
//                  queue.offer(node1.right);
//                  queue.offer(node2.right);
//              }
//              // If the left node of node1 is empty, assign directly
//              if (node1. left == null && node2. left != null) {
//                  node1. left = node2. left;
//              }
//              // If the right node of node1 is empty, assign directly
//              if (node1.right == null && node2.right != null) {
//                  node1.right = node2.right;
//              }
//          }
//          return root1;
//      }
// }
```
[[back to list]](#traversal-binary-tree)
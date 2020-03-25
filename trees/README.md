# Trees 

## Binary Tree 
  - Each node can only have 0, 1, or 2 nodes
  - Each child only has 1 parent 
  - Each node represents a certain state 

### Perfect Binary Tree vs. Full Binary Tree
  - Perfect binary tree has everything filled in - all the leaf nodes are full; a node either has 0 children or 2 children (very efficient)
    - Two important properties:
      - Number of nodes at each level doubles as it goes down the tree 
      - Sum of all nodes at the bottom level equals all the nodes above it plus 1
  - Full binary tree: a node either has either 0 or 2 children, but never just 1 child 

## Binary Search Tree
  - Great for comparing and searching
  - Preserves parent-child relationships
  - Lookup: O(log n);
  - Insert: O(log n);
  - Delete: O(log n);

  - Pros:
    - Better than O(n);
    - Ordered
    - Flexible Size 
  - Cons:
    - No O(1) operations 

### Balanced vs. Unbalanced Trees

### Balanced BST
  - AVL Tree
    - https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
  - Red Black Tree 
    - https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5

## Heap (Binary Heap)
  - Lookup: O(n)
  - Insert: O(log n)
  - Delete: O(log n)
  - Great at doing comparative operations

  Pros:
    - Better than O(n)
    - Priority
    - Flexible Size
    - Fast Insert

  Cons:
    - Slow lookup

### Priority Queue
  - "Think of the emergency room example"

## Trie (Pre-fix Tree)
  - A specialized tree used in searching, most often with text
  - Usually has an empty root node 
  - Can have multiple children
  - **Searching for words in a dictionary, providing auto-completions**
  - Benefit: Speed and Space 
    - Time: O(length of word)
    
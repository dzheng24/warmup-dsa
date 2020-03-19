# Linked Lists 

## Pros
- Fast insertion
- Fast Deletion
- Ordered
- Flexible Size 

## Cons
- Slow lookup
- More memory

Primary reason to choose Linked List over Array:
  - Ability to shrink/grow as needed
  - Lightweight, flexible

## Singly Linked Lists
A singly linked list contains a set of nodes, each node has 2 elements: value of data, and a pointer to the next node in line. First node is head, the last node is tail.

- prepend O(1);
- append O(1);
- lookup O(n);
- insert O(n);
- delete O(n);

pointer - a reference to another place in memory/object/node

## Doubly Linked Lists
Extra piece of data that links to the previous node. Allow us to traverse backwards. Searching can be more efficient. 

Downside: more memory

## Single vs. Double?
- Single 
  - Pro
    - Lesser memory
    - Simple implementation
  - Downside
    - Can't traversed from back to front

- Doubly
  - Pro
    - Can be traversed from front or back
    - Easier to delete 'previous' node 
  - Downside
    - More opeartions to perform
    - Requires more memory and storage


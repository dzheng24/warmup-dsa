# Hash Tables 

Key-value pairs;

The Process: A key gets sent through a hash function, then it hashes something fast (like a secret code), then that code gets mapped into a memory address, where we store the data.

- Insert O(1); very quick, unlike array
- Lookup O(1), occasionally, it may be O(n), due to collisions 
- Delete O(1);
- Search O(1); very quick, unlike array

## Hashtables are good at...
- fast lookup (good collision resolution needed)
- fast inserts
- flexible keys 

## Hashtables are bad at...
- unordered
- slow key iteration

## Hash Function? 
A function that generates a value of fixed length for each input that it gets. 

Idempotent - a function, given an input, will always return the same output
  - get fast access

## Problems with hash tables
- Collions: keys get put into the same address in the bucket 
- "keys" - looping over the whole hash table to find all the keys; example: iterate over a hash table that has 50 memory spaces, only to find 3 keys 
- "no concept of order", unlike array

## Map and Sets 
Map - allows to set any data type as the key, and it maintains "insertion order". 
```js
const a = new Map()
```

Set - only stores keys, no values
```js
const b = new Set()
```


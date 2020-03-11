# Merge Sort 

Merge sort is a divide and conquer algorithm. It works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these can be solved directly.

The solutions to the sub-problems are then combined to give a solution to the original problem. 

Merge sort first divides the array into equal halves and then combines them in a sorted manner.

How it works:

- If it is only one element in the list, it is already sorted, return.
- Divide the list recursively into two halves until it can no longer be divided.
- Merge the smaller lists into new list in sorted order.

Characteristics:

- Merge sort is useful for sorting linked lists.
- It is a stable sort, which means that the same element in an array maintain their original positions with respect to each other. 
- Time complexity: O(n log n)
- Space complexity: O(n)
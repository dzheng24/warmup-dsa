# Sorts

Helpful link for some visual: https://www.toptal.com/developers/sorting-algorithms

## Bubble Sort
Bubble sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent element if they are in the wrong order.

```js
function bubble(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
```

## Selection Sort
Selection sort works by repeatedly finding the smallest element, and putting it at the beginning. 

```js
function selection(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
```

## Insertion Sort
Insertion sort is good to use when the list is nearly sorted, and the dataset is relatively small. Insertion sort builds the final sorted array one item at a time, similar to when we are sorting playing cards. 

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
```

## Merge Sort 
Merge sort uses "divide and conquer" approach, meaning it will break bigger problem into smaller problems, and solve the smaller problems first, and build the list back up. This is a more popular sorting algorithm. Merge sort's big O is (n log n). 

```js
function mergeSort(array) {
  if(array.length < 2) {
    return array;
  }
  if(array.length > 1) {
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let array = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}
```

## Quick Sort 
Similar to merge sort, quick sort is a divide and conquer algorithm. It picks an element as a pivot, and partitions the given array around the picked pivot. The average case of quick sort is (n log n), although the worst case can be n^2. Quick sort has a better space complexity(log n) compared to merge sort (n). Quick sort is not stable, meaning the objects with the same keys may not be in the same order after being sorted. 


## Which Sort is Best? 
- Insertion Sort: Used with small input, and items are sorted; uses small space
- Bubble Sort: Only used for educational purposes (very rarely used)
- Selection Sort: Only used for educational purposes 
- Merge Sort: Very good because of divide & conquer, O(n log n); O(n) of space complexity
- Quick Sort: Average case of O(n log n); O(log n) of space complexity; downside is the worst case, if it has a bad pivoting point 

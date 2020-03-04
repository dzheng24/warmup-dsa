// 3/3/20 Tuesday 

// insertion sort practice
// https://initjs.org/insertion-sort-in-javascript-6c48563b4643
// https://www.youtube.com/watch?v=0KQyyZatDgM

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const nums = [23, 1, 2, 3, 4, 5, 6, 7]

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

console.log(insertionSort(nums));
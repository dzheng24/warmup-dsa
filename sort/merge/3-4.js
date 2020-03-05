// 3/4/20 Wednesday 

// merge sort practice 
// https://initjs.org/merge-sort-in-javascript-4614386c1374

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

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

console.log(mergeSort(numbers));
// 3/10/20 

// practicing merge sort 
// https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2

const numbers = [99, 44, 6, 2, 1, 5, 63, 87];

function mergeSort(array) {
  if (array.length === 1) {
    console.log('made it to base case');
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  console.log('left is : ', left, 'right is : ', right);

  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
  // return merge(
  //   mergeSort(left),
  //   mergeSort(right)
  // )
}

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  console.log('returning result is ', result.concat(left.slice(indexLeft)).concat(right.slice(indexRight)));

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(mergeSort(numbers));
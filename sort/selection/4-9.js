// 4/9/20 Thursday 

// Selection Sort Practice 

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    arr[i] = arr[minimum];
    arr[minimum] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);


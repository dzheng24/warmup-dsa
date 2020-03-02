// 3/1/20 Sunday

// selection sort practice 

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selection(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        j = min;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

console.log(selection(numbers));
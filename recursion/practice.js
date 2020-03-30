// 3/29/20 Sunday 

let counter = 0; 
function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return inception();
}
// console.log(inception());

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  // base case 
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}
console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i
  }
  return answer;
}
// console.log(findFactorialIterative(5));
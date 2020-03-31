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
  debugger;
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}
// console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i
  }
  return answer;
}
// console.log(findFactorialIterative(5));

// Given a number N, return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// The pattern of the sequence is that each value is the sum of the 2 previous values
// Ex. N = 5 -> 2 + 3

// O(n);
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
// console.log(fibonacciIterative(8));


//O(2^n)
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
// console.log(fibonacciRecursive(8));

// Implement a function that reverses a string using iteration... and then use recursion.

function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  console.log(result);
}

function reverseStringRecursive(str) {
  debugger;
  if (str === '') {
    return '';
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverseStringRecursive('yoyo master'));

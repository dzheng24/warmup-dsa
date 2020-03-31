# Recursion

A function that refers to itself. 

```js
function inception() {
  inception();
}
```

Good for tasks that have repeated subtasks. 

A possible problem with recursion?
  - The computer needs to allocate memory to remember things. Stack overflow can occur. 

Every recursive function needs a base case. 

## Pros
  - DRY
  - Readability

## Cons
  - Large Stack

## 3 Rules
  1. Identify the base case 
  2. Identify the recursive case 
  3. Get closer and closer and return when needed. Usually you have 2 returns. 


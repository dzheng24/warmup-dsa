// 3/23/20 Monday 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// linked list approach 

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      newNode.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.length === 1) {
      this.bottom = null;
    }
    let popped = this.top;
    this.top = this.top.next;
    this.length--;
    return popped;
  }
}

// const myStack = new Stack();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
// console.log(myStack);
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack);

//---------------------------------
// array approach

class Stack2 {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }
}

const myStack = new Stack2();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack);
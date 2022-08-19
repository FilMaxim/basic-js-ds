const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
  constructor () {
    this.head = null;
    this.length = 0;
  }


  push(element) {
    //throw new NotImplementedError('Not implemented');
    //const stack = new Stack(element);
    const stack = new Node(element);

    if (this.head) {
      stack.next = this.head;
      this.head = stack;
    } else {
      this.head = stack;
    }

    this.length++;
  }


  pop() {
    //throw new NotImplementedError('Not implemented');
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    return current.value;
  }


  peek() {
    //throw new NotImplementedError('Not implemented');
    return this.head.value;
  }
  }
  class Node {
    constructor (value) {
      this.value = value;
      this.next = null;
    }
  }

module.exports = {
  Stack
};

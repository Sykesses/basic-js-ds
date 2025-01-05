const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const newLN = new ListNode(value);
    if (this.last) {
      this.last.next = newLN; 
    }
    this.last = newLN;
    if (!this.first) {
      this.first = newLN;
    }
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    const value = this.first.value;
    this.first = this.first.next;
    if (!this.first) {
      this.last = null;
    }
    return value;
  }
}

module.exports = {
  Queue
};

const { NotImplementedError } = require('../extensions/index.js');


class Stack {
  constructor() {
    this.elements = [];
  }
  push(element) {
    this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }
}

module.exports = {
  Stack
};

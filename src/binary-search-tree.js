const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    const newN = new Node(data);
    
    if (!this._root) {
      this._root = newN;
      return;
    }

    let currentN = this._root;
    while (currentN) {
      if (data < currentN.data) {
        if (!currentN.left) {
          currentN.left = newN;
          return;
        }
        currentN = currentN.left;
      } else {
        if (!currentN.right) {
          currentN.right = newN;
          return;
        }
        currentN = currentN.right;
      }
    }
  }

  has(data) {
    let currentN = this._root;
    while (currentN) {
      if (data === currentN.data) {
        return true;
      }
      if (data < currentN.data) {
        currentN = currentN.left;
      } else {
        currentN = currentN.right;
      }
    }
    return false;
  }

  find(data) {
    let currentN = this._root;
    while (currentN) {
      if (data === currentN.data) {
        return currentN
      }
      if (data < currentN.data) {
        currentN = currentN.left;
      } else {
        currentN = currentN.right;
      }
    }
    return null;
  }

  remove(data) {
    this._root = this._remover(this._root, data);
  }

  _remover(N, data){
    if (!N) return null;

    if (data < N.data) {
      N.left = this._remover(N.left, data);
      return N;
    }

    if (data > N.data) {
      N.right = this._remover(N.right, data);
      return N;
    }

    if (!N.left && !N.right) {
      return null;
    }

    if (!N.left) {
      return N.right;
    }
    if (!N.right) {
      return N.left;
    }

    let minRightN = this._miner(N.right);
    N.data = minRightN.data;
    N.right = this._remover(N.right, minRightN.data);
    return N; 
  }

  _miner(N) {
    while (N.left) {
      N = N.left;
    }
    return N;
  }

  min() {
    if (!this._root) return null;
    let currentN = this._root;
    while (currentN.left) {
      currentN = currentN.left;
    }
    return currentN.data;
  }

  max() {
    if (!this._root) return null;
    let currentN = this._root;
    while (currentN.right) {
      currentN = currentN.right;
    }
    return currentN.data;
  }
}

module.exports = {
  BinarySearchTree
};
const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.roodNode = null;
  }


  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.roodNode
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.roodNode = addWithin(this.roodNode, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchWithin(this.roodNode, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
      searchWithin(node.left,data) :
      searchWithin(node.right,data);
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findWithin(this.roodNode, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ?
      findWithin(node.left,data) :
      findWithin(node.right,data);
    }
  }


  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.roodNode = removeNode(this.roodNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        //проверка является ли узел листом
        if (!node.left && !node.right){
          return null;
        }
        // когда нет левого потомка
        if (!node.left) {
          node = node.right;
          return node;
        }
        //когда нет правого потомка
        if (!node.right) {
          node = node.left;
          return node;
        }
        //когда есть и евый и правый потомок
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeNode(node.right, minFromRight.data)
        return node;
      }
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.roodNode) {
      return
    }
    let node = this.roodNode;
    while (node.left) {
      node = node.left
    }
    return node.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.roodNode) {
      return
    }
    let node = this.roodNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;


  }
}

module.exports = {
  BinarySearchTree
};
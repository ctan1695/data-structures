

var BinarySearchTree = function(value) {
  //this._root = null;

  var newBinarySearchTree = {};
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  _.extend(newBinarySearchTree, binarySearchMethods);

  return newBinarySearchTree;
};

var binarySearchMethods = {};

binarySearchMethods.insert = function (value) {
  var newTree = BinarySearchTree(value);

  var addNode = function (currentNode, newTree) {
    if (newTree.value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newTree;
      } else {
        addNode(currentNode.left, newTree);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newTree;
      } else {
        addNode(currentNode.right, newTree);
      }
    }
  };
  addNode(this, newTree);
};

binarySearchMethods.contains = function (value) {
  var currentNode = this;
  while (currentNode) {
    if (value === currentNode.value) {
      return true;
    }
    if (value < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return false;
};

binarySearchMethods.depthFirstLog = function (cb) {
  var traverse = function(node) {
    cb(node.value);
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 .insert: linear
 .contains: linear
 .depthFirstLog: linear
 */
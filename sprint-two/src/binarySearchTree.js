

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
  var insertNode = function (currentNode, newNode) {
    var newBST = BinarySearchTree(newNode);
    if (!currentNode.left) {
      currentNode.left = BinarySearchTree(newNode);
    }
    if (!currentNode.right) {
      currentNode.right = BinarySearchTree(newNode);
    }


    if (newNode < currentNode.value) {
      //if (currentNode.left.length === 0) {
      currentNode.left = newBST;
      //} else {
      insertNode(currentNode.left, newNode);
      //}
    } else {
      currentNode.right = newBST;
      if (currentNode.right.length === 0) {
        currentNode.right.push(newBST);
      } else {
        insertNode(currentNode.right, newNode);
      }
    }
  };
  // var insertValue = function (currentValue, currentNode) {
  //   var newNode = BinarySearchTree(currentValue);
  //   if (currentValue < currentNode.node) {
  //     currentNode.left.push(newNode);
  //   } else if (currentValue > currentNode.node) {
  //     currentNode.right.push(newNode);
  //   }

  // for ( var i = 0; i < currentNode.left.length; i++) {
  //   insertValue(value, currentNode.left[i]);
  // }

  // for ( var i = 0; i < currentNode.right.length; i++) {
  //   insertValue(value, currentNode.right[i]);
  // }
  /* for ( var i = 0; i < currentNode.right.length; i++) {
      if (currentValue < currentNode.right[i].node) {
        currentNode.left.push(newNode);
      } else {
        currentNode.right.push(newNode);
      }
    }  */
  //};
  insertNode(this, value);
};

binarySearchMethods.contains = function (target) {

};

binarySearchMethods.depthFirstLog = function (cb) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
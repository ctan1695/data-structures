var Node = function(value) {
  this._value = value;
  this._left = null;
  this._right = null;
};

var BinarySearchTree = function() {
  this._root = null;
};

BinarySearchTree.prototype.insert = function (value) {
  var newNode = new Node(value);
  if (!this._root) {
    this._root = newNode;
    return this;
  }
};

BinarySearchTree.prototype.contains = function (target) {

};

BinarySearchTree.prototype.depthFirstLog = function (cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/* Tree function from tree.js */
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var parentsTree = this;
  var result = false;
  var findTarget = function(target, currentTree) {
    if (currentTree.value === target) {
      result = true;
    } else {
      for (var i = 0; i < currentTree.children.length; i++) {
        if (!result) {
          result = findTarget(target, currentTree.children[i]);
        }
      }
    }
    return result;
  };
  return findTarget(target, parentsTree);
};
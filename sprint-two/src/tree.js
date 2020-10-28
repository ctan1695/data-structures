var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var parentsTree = this;
  var findTarget = function(target, currentTree) {
    if (currentTree.value === target) {
      return true;
    } else {
      for (var i = 0; i < currentTree.children.length; i++) {
        return findTarget(target, currentTree.children[i]);
      }
    }
    return false;
  };
  findTarget(target, parentsTree);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

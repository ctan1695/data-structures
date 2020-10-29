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



/*
 * Complexity: What is the time complexity of the above functions?
 treeMethods.addChild: linear time complexity
 treeMethods.contains: linear time complexity
 */

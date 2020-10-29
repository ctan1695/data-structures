var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.tail) {
      list.head = new Node(value);
      list.tail = new Node(value);
    } else {
      var oldTail = list.tail;
      list.tail = new Node(value);
      oldTail.next = list.tail;
    }
  };

  list.removeHead = function() {
    //if list is empty
    if (!list.head) {
      return null;
    } else {
      //if list is not empty
      var removedHead = list.head;
      //if only one node left (head and tail are equal to same node)
      if (list.head === list.tail) {
        list.head = null;
        list.tail = null;
      } else if (list.head.next === null) {
        list.head = list.tail;
      } else {
        list.head = list.head.next;
      }
      return removedHead.value;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      if (currentNode.next !== null) {
        currentNode = currentNode.next;
      } else if (currentNode !== list.tail) {
        currentNode = list.tail;
      } else {
        break;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 list.addToTail: constant time complexity.
 list.removeHead: constant time complexity.
 list.contains: linear time complexity.
 */

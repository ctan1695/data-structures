

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.nodes[node]) {
    this.nodes[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  //   var findNode = function (node) {
  //     if (this.nodes[value] === node) {
  //       result = true;
  //     } else {

  //     }
  for (var key in this.nodes) {
    if (key === node.toString()) {
      result = true;
      break;
    }
  }
  //   }
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
//   for (var i = 0; i < this.nodes[fromNode].length; i++) {
//     if (this.nodes[toNode].indexOf(this.nodes[fromNode[i]]) >= 0) {
//       return true;
//     }
//   }
//   return false;

  if (this.nodes[fromNode].includes(toNode) || this.nodes[toNode].includes(fromNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.nodes[fromNode]) {
    this.addNode(fromNode);
  }
  if (!this.nodes[toNode]) {
    this.addNode(toNode);
  }
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    var fromNodeEdges = this.nodes[fromNode];
    for (var i = 0; i < this.nodes[toNode].length; i++) {
      if (fromNodeEdges.includes(this.nodes[toNode[i]])) {
        this.nodes[toNode[i]].splice(i, 1);
        var indexFrom = fromNodeEdges.indexOf(this.nodes[toNode[i]]);
        this.nodes[fromNode].splice(indexFrom, 1);
      }
    }
  } else {
    return this.hasEdge(fromNode, toNode);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 */



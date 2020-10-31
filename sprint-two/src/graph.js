

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
  for (var i = 0; i < this.nodes[node].length; i++) {
    this.removeEdge(node, this.nodes[node][i]);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.nodes[fromNode] || !this.nodes[toNode]) {
    return false;
  }

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
  var indexTo = this.nodes[toNode].indexOf(fromNode);
  this.nodes[toNode].splice(indexTo, 1);
  var indexFrom = this.nodes[fromNode].indexOf(toNode);
  this.nodes[fromNode].splice(indexFrom, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
.addNode: constant
.contains: linear
.removeNode: linear
.hasEdge: linear
.addEdge: linear
.removeEdge: linear
.forEachNode: linear
 */



var Stack = function() {
  var newStack = Object.create(stackMethods);

  return newStack;
};

var stackMethods = {
  push: function(value) {
    var lastPosition = Object.keys(this).length - 1;

    this[lastPosition + 1] = value;
  },

  pop: function(value) {
    var lastPosition = Object.keys(this).length - 1;
    var poppedElement = this[lastPosition];

    delete this[lastPosition];

    return poppedElement;
  },

  size: function(value) {
    return Object.keys(this).length;
  }
};



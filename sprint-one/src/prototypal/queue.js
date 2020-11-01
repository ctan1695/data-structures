var Queue = function() {
  var newQueue = Object.create(queueMethods);

  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    var lastPosition = Object.keys(this).length - 1;

    this[lastPosition + 1] = value;
  },

  dequeue: function() {
    var dequeuedElement = this[0];

    delete this[0];
    for (var key in this) {
      if (key !== 'enqueue' && key !== 'dequeue' && key !== 'size') {
        this[key - 1] = this[key];
      }
    }
    var lastPosition = Object.keys(this).length - 1;
    delete this[lastPosition];

    return dequeuedElement;
  },

  size: function() {
    return Object.keys(this).length;
  }
};



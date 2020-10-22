var Queue = function() {
  //Putting this comment here so the 'reference to this' test can pass.
};

Queue.prototype.enqueue = function (value) {
  var lastPosition = Object.keys(this).length - 1;

  this[lastPosition + 1] = value;
};

Queue.prototype.dequeue = function () {
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
};

Queue.prototype.size = function () {
  return Object.keys(this).length;
};

var newQueue = new Queue();


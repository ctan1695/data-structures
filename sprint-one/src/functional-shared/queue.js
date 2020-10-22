var Queue = function() {
  var newQueue = {};

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  var lastPosition = Object.keys(this).length > 3 ? Object.keys(this).length - 4 : -1;

  this[lastPosition + 1] = value;
};

queueMethods.dequeue = function () {
//delete last element then return that last element
  var dequeuedElement = this[0];

  delete this[0];

  for (var key in this) {
    if (key !== 'enqueue' && key !== 'dequeue' && key !== 'size') {
      this[key - 1] = this[key];
      delete this[key];
    }
  }
  return dequeuedElement;
};

queueMethods.size = function () {
  return Object.keys(this).length - 3;
};

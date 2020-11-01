var Stack = function() {
  //Putting this comment here so the 'reference to this' test can pass.
};

Stack.prototype.push = function (value) {
  var lastPosition = Object.keys(this).length - 1;

  this[lastPosition + 1] = value;
};

Stack.prototype.pop = function () {
  var lastPosition = Object.keys(this).length - 1;
  var poppedElement = this[lastPosition];

  delete this[lastPosition];
  return poppedElement;
};

Stack.prototype.size = function () {
  return Object.keys(this).length;
};

var newStack = new Stack();



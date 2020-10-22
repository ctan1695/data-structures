var Stack = function() {
  var newStack = {};
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  var lastPosition = Object.keys(this).length > 3 ? Object.keys(this).length - 4 : -1;

  this[lastPosition + 1] = value;
};

stackMethods.pop = function () {
  var lastPosition = Object.keys(this).length > 3 ? Object.keys(this).length - 4 : -1;
  var poppedValue = this[lastPosition];

  delete this[lastPosition];
  return poppedValue;
};

stackMethods.size = function () {
  return Object.keys(this).length - 3;
};
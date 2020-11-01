var Stack = function() {
  var someInstance = {};

  //Get all the keys of the object and store it in an array.
  var allKeys = Object.keys(someInstance);
  //Find last position in object. Length includes the non-numerical values of push, pop and size so need to account for that.
  var lastPosition = allKeys.length > 3 ? ((allKeys.length - 1) - 3) : 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //storage object is numerically ordered the last element in the array is the last item in the stack. Use that key to add the value at that key + 1.

    var newValuePosition = lastPosition = 0 ? 0 : lastPosition + 1;
    someInstance[newValuePosition] = value;

    return someInstance;
  };

  someInstance.pop = function() {
    var result = someInstance[lastPosition];
    delete someInstance[lastPosition];
    //Update lastPosition after removing last element.
    lastPosition--;
    return result;
  };

  someInstance.size = function() {
    //if the instance object is empty, return 0.
    if (Object.keys(someInstance).length === 0) {
      return 0;
    } else {
      return Object.keys(someInstance).length - 3;
    }
  };

  return someInstance;
};

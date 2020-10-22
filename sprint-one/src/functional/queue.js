var Queue = function() {
  var someInstance = {};
  //Get all the keys of the object and store it in an array.
  var allKeys = Object.keys(someInstance);
  //Find last position in object. Length includes the non-numerical values of push, pop and size so need to account for that.
  var lastPosition = allKeys.length > 3 ? ((allKeys.length - 1) - 3) : 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {

    //Add element to far left of object, shifting all elements one position to the right.
    for (var key in someInstance) {
      //Only want to loop through the numerical keys.
      if (key !== 'enqueue' && key !== 'dequeue' && key !== 'size') {
        key = parseInt(key, 10);
        if (key === lastPosition) {
          someInstance[lastPosition + 1] = someInstance[lastPosition];
        } else {
          someInstance[key + 1] = someInstance[key];
        }
      }
    }
    someInstance[0] = value;
  };

  someInstance.dequeue = function() {
    //Set lastPosition in case items were enqueued which would change the key value pairs.
    allKeys = Object.keys(someInstance);
    lastPosition = allKeys.length > 3 ? ((allKeys.length - 1) - 3) : 0;
    //Remove element from far right of object.
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

  //testing if part one branch works

  return someInstance;
};

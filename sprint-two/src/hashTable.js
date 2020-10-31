

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var nestedStorage = [];
  var nestedTuple = [];
  nestedTuple.push(k);
  nestedTuple.push(v);

  // nestedStorage.push(v);
  if (this._storage[index]) {
    nestedStorage = this._storage[index];
    for (var i = 0; i < nestedStorage.length; i++) {
      if (nestedStorage[i][0] === k) {
        this._storage[index].splice(i, 1);
      }
    }
  }

  nestedStorage.push(nestedTuple);
  this._storage[index] = nestedStorage;

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var getValue = function(input, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][0] === input) {
        return arr[i][1];
      }
    }
  };

  for (var key in this._storage) {
    if (typeof this._storage[key] !== 'function') {
      return getValue(k, this._storage[key]);
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert : linear
 retrieve: linear
 remove: linear
 */



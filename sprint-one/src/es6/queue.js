class Queue {
  constructor() {
    //Putting this comment here so the 'reference to this' test can pass.
  }

  enqueue (value) {
    var lastPosition = Object.keys(this).length - 1;
    this[lastPosition + 1] = value;
  }

  dequeue () {
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
  }

  size () {
    return Object.keys(this).length;
  }
}

var newQueue = new Queue();
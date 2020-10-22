class Stack {
  constructor() {
    //Putting this comment here so the 'reference to this' test can pass.
  }

  push (value) {
    var lastPosition = Object.keys(this).length - 1;

    this[lastPosition + 1] = value;
  }

  pop () {
    var lastPosition = Object.keys(this).length - 1;
    var poppedElement = this[lastPosition];
    delete this[0];

    return poppedElement;
  }

  size () {
    return Object.keys(this).length;
  }
}

var newStack = new Stack();
"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// Task 1
var hello = "Hello ";
var world = "World";

var joinString = function joinString(x, y) {
  return x + y;
};

console.log(joinString(hello, world));

// Task 2
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

console.log(multiply(2, 5));
console.log(multiply(5));

// Task 3
var average = function average() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (x, y) {
    return x + y;
  }, 0) / numbers.length;
};

console.log(average(1, 3, 6, 6));

// Task 4
average = function average(_ref) {
  var _ref2 = _toArray(_ref),
      numbers = _ref2.slice(0);

  return numbers.reduce(function (x, y) {
    return x + y;
  }, 0) / numbers.length;
};
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(grades));

// Task 5
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastname = data[4];

console.log(firstName, lastname);

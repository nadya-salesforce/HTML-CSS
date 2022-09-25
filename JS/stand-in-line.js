//57JavaScript Algorithms and Data Structures -> Basic JavaScript
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//Add the number to the end of the array, then remove the first element of the array.
//The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  // Only change code below this line
  var removed=arr[0];
  var lastIndex=arr.length-1;
  var last=arr[lastIndex];
  console.log(last);
  
  return item;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

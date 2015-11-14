/*
 * Free Code Camp
 * 09 - 02 - Diff Two Arrays
 *
 * Created by Jeff Stautz, 2015-11-14
 *
 * Instructions:
 *   Compare two arrays and return a new array with any items only found in one of the original arrays.
 *   Here are some helpful links:
 *   Comparison Operators - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
 *   Array.slice()        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 *   Array.filter()       - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *   Array.indexOf()      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *   Array.concat()       - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */

function diff(arr1, arr2) {
  var newArr = [];
  // filter out anything in arr1 that equals something in arr2
  // filter out anything in arr2 that equals anything in arr1
  // return fitered1 + filtered2
  newArr = arr1.filter(notInArray, arr2);
  newArr = newArr.concat(arr2.filter(notInArray, arr1));
  return newArr;
}

function notInArray(value) {
  var exists = true;
  for (i = 0; i < this.length; i++) {
    if (value === this[i]) {
      console.log("equals " + this[i] + " and " + value);
      exists = false;
    }
  }
  return exists;
}

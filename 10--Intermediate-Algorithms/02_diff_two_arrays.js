/*
 * Free Code Camp
 * 10 - 02 - Diff Two Arrays
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
    newArr = arr1.filter(notInArray, arr2);
    newArr = newArr.concat(arr2.filter(notInArray, arr1));
    return newArr;
}

function notInArray(value) {
    return (this.indexOf(value) === -1);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

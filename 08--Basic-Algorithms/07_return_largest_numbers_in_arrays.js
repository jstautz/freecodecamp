/*
 * Free Code Camp
 * 08 - 07 - Return Largest Numbers in Arrays
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
 *   Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   Comparison Operators
 */

function largestOfFour(arr) {
  for (i = 0; i < arr.length; i++) {
    var largest = 0;
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    arr[i] = largest;
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

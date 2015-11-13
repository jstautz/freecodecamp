/*
 * Free Code Camp
 * 08 - 11 - Chunky Monkey
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Write a function that splits an array (first argument) into groups the length
 *    of size (second argument) and returns them as a multidimensional array.
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   Array.push() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 */


function chunk(arr, size) {
    var chunkedArray = [];
    for (i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
}

chunk([0,1,2,3,4,5], 2);

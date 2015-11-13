/*
 * Free Code Camp
 * 08 - 12 - Slasher Flick
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Return the remaining elements of an array after chopping off n elements from the head.
 *   The head meaning the beginning of the array, or the zeroth index
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   Array.slice() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 *   Array.splice() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

function slasher(arr, howMany) {

    for (i = 0; i < howMany ; i++) {
        arr.shift();
    }
    return arr;
}

slasher([1, 2, 3], 2);

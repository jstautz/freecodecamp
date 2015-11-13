/*
 * Free Code Camp
 * 08 - 14 - Seek and Destroy
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   Arguments object - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 *   Array.filter() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

function destroyer(arr) {
    var arrayToTrim = arguments[0];

    // Collect all args together
    var toDelete = [];
    for (i = 1; i < arguments.length; i++) {
        toDelete.push(arguments[i]);
    }
  
    // Filter out anything in collected args array
    return arrayToTrim.filter(function(element) {
        if (toDelete.indexOf(element) >= 0) {
            return false;
        } else {
            return true;
        }
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, 6, 7);

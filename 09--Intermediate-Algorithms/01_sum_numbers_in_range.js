/*
 * Free Code Camp
 * 09 - 01 - Sum all Numbers in a Range
 *
 * Created by Jeff Stautz, 2015-11-13
 *
 * Instructions:
 *   We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
 *   The lowest number will not always come first.
 *   Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
 *   Here are some helpful links:
 *   Math.max() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
 *   Math.min() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
 *   Array.reduce() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

function sumAll(arr) {
    var highest = Math.max(arr[0], arr[1]);
    var lowest  = Math.min(arr[0], arr[1]);
    var total = 0;
    for (i = lowest; i <= highest; i++) {
        total = total + i;
    }
    return total;
}

sumAll([1, 4]);

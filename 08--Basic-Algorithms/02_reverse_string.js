/*
 * Free Code Camp
 * 08 - 02 - Reverse String
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Reverse the provided string.
 *   You may need to turn the string into an array before you can reverse it.
 *   Your result must be a string.
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   Global String Object - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *   String.split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *   Array.reverse() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse 
 *   Array.join() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */

function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello");

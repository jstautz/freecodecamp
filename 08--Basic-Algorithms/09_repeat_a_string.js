/* 
 * Free Code Camp
 * 08 - 09 - Repeat a string repeat a string
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   Global String Object - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

function repeat(str, num) {
    if (num <= 0) {
        return "";
    }
    return str + repeat(str, num-1);
}

repeat("abc", 3);

/*
 * Free Code Camp
 * 08 - 10 - Truncate a string
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 *   Return the truncated string with a "..." ending.
 *   Note that the three dots at the end add to the string length.
 *   If the length of the string is less than or equal to 3 characters, then the length of the three dots is not added to the string length.
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   String.slice()
 */

function truncate(str, num) {
    if (num < str.length) {
        if (str.length > 3 && num > 3) {
            return str.substr(0,num-3) + "...";  
        }
        else if (str.length <= 3 || num <= 3) {
            return str.substr(0,num) + "...";
        }
    }
    return str;
}

truncate("Absolutely Longer", 2);

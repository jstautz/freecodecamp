/*
 * Free Code Camp
 * 08 - 08 - Confirm the Ending
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Check if a string (first argument) ends with the given target string (second argument).
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   String.substr() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 */

function end(str, target) {
 
    if (str.substr(-target.length) == target) {
        return true;
    }
    return false;
}

end("Bastian", "n");

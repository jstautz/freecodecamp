/*
 * Free Code Camp
 * 08 - 04 - Check for Palidromes
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions: 
 *   Return true if the given string is a palindrome. Otherwise, return false.
 *   A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 *   You'll need to remove punctuation and turn everything lower case in order to check for palindromes.
 *   We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   String.replace() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 *   String.toLowerCase() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 */

function palindrome(str) {
    
    // Clean up the string & remove whitespace, punctuation, etc.
    var array = str.toLowerCase().replace(/[\W_-]/g,"").split("");

    for (i=0; i < array.length/2; i++) {
        if (array[i] != array[array.length-1-i]) {
            return false;
        }
    }
    return true;
}

palindrome("not a palindrome");

/*
 * Free Code Camp
 * 08 - 05 - Title Case a Sentence
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 *   For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   String.charAt() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
 */

function titleCase(str) {
    var wordArray = str.split(" ");
    var finalString = [];
    var capped = false;
  
    for (i=0; i < wordArray.length; i++) {
        var newstring = "";
        var capped = false;
        for (j=0; j < wordArray[i].length; j++) {

            // Skip non-alphanumerics, just add them to string
            if ( !(wordArray[i].charCodeAt(j) > 64 && wordArray[i].charCodeAt(j) < 91) && 
                 !(wordArray[i].charCodeAt(j) > 96 && wordArray[i].charCodeAt(j) < 123)) { 
                newstring = newstring + wordArray[i].charAt(j);
            }
            // Keep track of whether we've capitalized the word
            else if (capped === false) {
                newstring = newstring + wordArray[i].charAt(j).toUpperCase();
                capped = true;
            }
            else {
                newstring = newstring + wordArray[i].charAt(j).toLowerCase();
            }
        }
        finalString[i] = newstring;
    }
  return finalString.join(" ");
}

titleCase("''This'' is a test.");

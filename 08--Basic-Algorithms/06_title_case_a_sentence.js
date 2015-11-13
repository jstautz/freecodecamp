/*
 * Free Code Camp
 * 08 - 06 - Title Case a Sentence
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
    
    for (i=0; i<wordArray.length; i++) {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].substring(1).toLowerCase();
    }
    return wordArray.join(" ");
}

titleCase("x''This'' is a test.");

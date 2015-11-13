/*
 * Free Code Camp
 * 08 - 05 - Find the Longest Word in a String
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions: 
 *   Return the length of the longest word in the provided sentence.
 *   Your response should be a number.
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   String.split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *   String.length - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 */

function findLongestWord(str) {
  
  var wordArray = str.split(" ");
  var longestCount = 0;
  
  for (i=0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestCount) {
      longestCount = wordArray[i].length;
    }
  }
  
  return longestCount;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

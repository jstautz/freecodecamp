/*
 * Free Code Camp
 * 09 - 02 - Diff Two Arrays
 *
 * Created by Jeff Stautz, 2015-11-14
 *
 * Instructions:
 *   Convert the given number into a roman numeral.
 *   All roman numerals answers should be provided in upper-case.
 *   Here are some helpful links:
 *   Roman Numerals - http://www.mathsisfun.com/roman-numerals.html
 *   Array.splice() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 *   Array.indexOf() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *   Array.join() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */

function convert(num) {
    var numArray = num.toString().split("").map(function(t) { return parseInt(t);});
    var digitsLeft = numArray.length;
    var romanString = "";
    var remainder = 0;
    
    for (i = 0; i < numArray.length; i++) {
        if (digitsLeft == 4) {
            // Thousands
            romanString += repeat("M", numArray[i]); 
        } else if (digitsLeft == 3){
            // Hundreds
            if (numArray[i] == 9) {
                romanString += "CM";
            } else if (numArray[i] >= 5){
                romanString += "D" + repeat("C", numArray[i] % 5);
            } else if (numArray[i] == 4) {
                romanString += "CD";
            } else if (numArray[i] < 4) {
                romanString += repeat("C", numArray[i]);
            }
        } else if (digitsLeft == 2) {
            // Tens
            if (numArray[i] == 9) {
                romanString += "XC";
            } else if (numArray[i] >= 5){
                romanString += "L" + repeat("X", numArray[i] % 5);
            } else if (numArray[i] == 4) {
                romanString += "XL";
            } else if (numArray[i] < 4) {
                romanString += repeat("X", numArray[i]);
            }
        } else if (digitsLeft == 1) {
            // Ones
            if (numArray[i] == 9) {
                romanString += "IX";
            } else if (numArray[i] >= 5){
                romanString += "V" + repeat("I", numArray[i] % 5);
            } else if (numArray[i] == 4) {
                romanString += "IV";
            } else if (numArray[i] < 4) {
                romanString += repeat("I", numArray[i]);
            }
        }
        digitsLeft--;
    }
    return romanString;
}

function repeat(str, times) {
    return new Array(times + 1).join(str);
}

convert(1450);

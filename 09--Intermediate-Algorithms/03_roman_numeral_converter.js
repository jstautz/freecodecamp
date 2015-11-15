/*
 * Free Code Camp
 * 09 - 03 - Roman Numeral Converter
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

function convert(num){
  // Convert int to array of ints so we can work through each digit one by one
  var numArray = num.toString().split("").map(function(t) { return parseInt(t);});

  // Keep track of which digit we're on
  var digitsLeft = numArray.length;

  // We'll build our string here
  var romanString = "";
    
    for (i = 0; i < numArray.length; i++) {
        if (digitsLeft == 4) {
            // We're on the thousands place
            romanString += repeat("M", numArray[i]); 
        } else if (digitsLeft == 3){
            // Hundreds
            romanString += romanize(numArray[i], "M", "D", "C");
        } else if (digitsLeft == 2) {
            // Tens
            romanString += romanize(numArray[i], "C", "L", "X");
        } else if (digitsLeft == 1) {
            // Ones
            romanString += romanize(numArray[i], "X", "V", "I");
        }
        digitsLeft--;
    }
    return romanString;
}

function repeat(str, times) {
    return new Array(times + 1).join(str);
}

function romanize(digit, tens, fives, ones) {
  var string = "";
  if (digit == 9) {
    string += ones + tens;
  } else if (digit >= 5) {
    string += fives + repeat(ones, digit % 5);
  } else if (digit == 4) {
    string += ones + fives;
  } else if (digit < 4) {
    string += repeat(ones, digit);
  }
  return string;
}

convert(1450);

/*
 * Free Code Camp
 * 08 - 03 - Factorialize a number
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Return the factorial of the provided integer.
 *   If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 *   Factorials are often represented with the shorthand notation n!
 *   For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   Arithmetic Operators - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
 */

// Recursive solution
function factorializeRecursive(num) {
  if (num == 1 || num === 0) {
    return 1;
}
  else {
    return num * factorialize(num-1);
  }
}

// Iterative solution
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    else {
        var sum = 1;
        for (i = 1; i <=num; i++) {
            sum = sum * i;
        }
      return sum;
    }
    
}

factorialize(5);

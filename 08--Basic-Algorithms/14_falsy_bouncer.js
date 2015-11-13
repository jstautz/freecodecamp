/*
 * Free Code Camp
 * 08 - 14 - Falsy Bouncer
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Remove all falsy values from an array.
 *   Falsy values in javascript are false, null, 0, "", undefined, and NaN.
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   Boolean Objects -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 *   Array.filter() -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

function bouncer(arr) {
    return arr.filter(function(value) {return value;});
}


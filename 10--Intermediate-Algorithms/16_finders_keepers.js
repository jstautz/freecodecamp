/*
 * Free Code Camp
 * 10 - 16 - Finders Keepers
 *
 * Created by Jeff Stautz, 2015-12-09
 *
 * Instructions:
 *  Create a function that looks through an array (first argument)
 *  and returns the first element in the array that passes a truth test (second argument). 
 * 
 */

function find(arr, func) {
    // Return first item in array
    return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

/*
 * Free Code Camp
 * 10 - 17 - Drop It
 *
 * Created by Jeff Stautz, 2015-12-09
 *
 * Instructions:
 *  Drop the elements of an array (first argument), starting from the front,
 *  until the predicate (second argument) returns true.
 * 
 */

function drop(arr, func) {  
    for (i = 0; i < arr.length; i++) {
        console.log(func(arr[i]));
        if (func(arr[i])) {
            return arr;
        } else {
            arr.shift();
            // shift the index back.
            i--;
        }
    }
    return arr;
}

drop([1, 2, 3, 4], function(n) {return n >= 3; });

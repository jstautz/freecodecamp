/*
 * Free Code Camp
 * 10 - 08 - Missing letters
 *
 * Created by Jeff Stautz, 2015-12-08
 *
 * Instructions: 
 *  Find the missing letter in the passed letter range and return it.
 *  If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
    for (i = 1; i < str.length; i++) {
        // if chars are not adjacent
        if (str.charCodeAt(i) - str.charCodeAt(i-1) != 1) {
            return String.fromCharCode(str.charCodeAt(i) - 1);
        }
    }
}

fearNotLetter("abce");

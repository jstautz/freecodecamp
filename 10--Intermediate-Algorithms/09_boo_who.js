/*
 * Free Code Camp
 * 10 - 09 - Boo who
 *
 * Created by Jeff Stautz, 2015-12-08
 *
 * Instructions: 
 *  Check if a value is classified as a boolean primitive. Return true or false.
 *  Boolean primitives are true and false.
 */

function boo(bool) {
    if (typeof(bool) === "boolean") {
        return true;
    }
    return false;
}

boo(null);

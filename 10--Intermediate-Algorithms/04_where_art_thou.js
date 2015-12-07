/*
 * Free Code Camp
 * 09 - 04 - Where Art Thou?
 *
 * Created by Jeff Stautz, 2015-11-16
 *
 * Instructions:
 *   Make a function that looks through an array of objects (first argument)
 *   and returns an array of all objects that have matching property and value
 *   pairs (second argument). Each property and value pair of the source object
 *   has to be present in the object from the collection if it is to be included
 *   in the returned array.
 *   For example, if the first argument is
 *      [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
 *       { first: "Tybalt", last: "Capulet" }]
 *   and the second argument is
 *      { last: "Capulet" }
 *   then you must return the third object from the array (the first argument),
 *   because it contains the property and it's value, that was passed on as the second argument.
 */


function where(collection, source) {
    var keysToFind = Object.keys(source);
    var matchArray = [];
    var matching;

    // For every object in collection, go through each item in source
    // see if key & value match
    for (i = 0; i < collection.length; i++) {
        matching = false;
        for (j = 0; j < keysToFind.length; j++) {
            if (collection[i][keysToFind[j]] === source[keysToFind[j]]) {
                matching = true;
            } else {
                matching = false;
            }
        }
        // if we make it out with all key/value pairs matching, add to array
        if (matching) {
            matchArray.push(collection[i]);
        }
    }
    return matchArray;   
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

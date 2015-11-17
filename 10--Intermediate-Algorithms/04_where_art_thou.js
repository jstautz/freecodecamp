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
  var findKey = Object.keys(source);
  var findValue = source[findKey];
  var thisObject;
  var matchArray = [];
  
  for (i = 0; i < collection.length; i++) {
    thisObject = collection[i];
    if (thisObject[findKey] === findValue) {
      console.log("found one: " + thisObject[findKey]);
      matchArray.push(thisObject);
    } else {
      console.log("not this one: " + thisObject[findKey]);
    }
  } 
  return matchArray;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });